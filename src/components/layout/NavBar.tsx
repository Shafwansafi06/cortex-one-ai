import React from 'react';
import { Bell, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { GlobalSearchBar } from '../ui/GlobalSearchBar';

interface NavBarProps {
  sidebarCollapsed?: boolean;
}

export function NavBar({ sidebarCollapsed = false }: NavBarProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 right-0 z-30 glass border-b border-border/50"
      style={{
        left: sidebarCollapsed ? 80 : 280,
        width: sidebarCollapsed ? 'calc(100% - 80px)' : 'calc(100% - 280px)',
      }}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Global Search */}
        <div className="flex-1 max-w-2xl">
          <GlobalSearchBar />
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative hover-glow">
            <Bell className="w-5 h-5" />
            <Badge 
              variant="destructive" 
              className="absolute -top-2 -right-2 w-5 h-5 text-xs p-0 flex items-center justify-center"
            >
              3
            </Badge>
          </Button>

          {/* User Profile */}
          <Button variant="ghost" size="sm" className="hover-glow">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-primary-foreground" />
            </div>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}