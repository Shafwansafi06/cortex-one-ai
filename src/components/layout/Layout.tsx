import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { NavBar } from './NavBar';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gradient-background">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        onToggleCollapse={setSidebarCollapsed}
        mobileOpen={mobileSidebarOpen}
        onMobileToggle={setMobileSidebarOpen}
        isMobile={isMobile}
      />
      <NavBar 
        sidebarCollapsed={sidebarCollapsed} 
        onMobileMenuToggle={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        isMobile={isMobile}
      />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="transition-all duration-300"
        style={{
          marginLeft: isMobile ? 0 : (sidebarCollapsed ? 80 : 280),
          paddingTop: isMobile ? 140 : 120, // Adequate space below search bar
        }}
      >
        <div className={`${isMobile ? 'px-3 pb-20' : 'p-4 md:p-6'}`}>
          {children}
        </div>
      </motion.main>
    </div>
  );
}