import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { NavBar } from './NavBar';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-background">
      <Sidebar />
      <NavBar sidebarCollapsed={sidebarCollapsed} />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="transition-all duration-300"
        style={{
          marginLeft: sidebarCollapsed ? 80 : 280,
          paddingTop: 88, // Height of navbar + padding
        }}
      >
        <div className="p-6">
          {children}
        </div>
      </motion.main>
    </div>
  );
}