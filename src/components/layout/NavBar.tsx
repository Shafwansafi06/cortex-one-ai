import React from 'react';
import { Bell, User, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { GlobalSearchBar } from '../ui/GlobalSearchBar';

interface NavBarProps {
  sidebarCollapsed?: boolean;
  onMobileMenuToggle?: () => void;
  isMobile?: boolean;
}

export function NavBar({ 
  sidebarCollapsed = false, 
  onMobileMenuToggle,
  isMobile = false 
}: NavBarProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 right-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border/50 shadow-lg"
      style={{
        left: isMobile ? 0 : (sidebarCollapsed ? 80 : 280),
        width: isMobile ? '100%' : (sidebarCollapsed ? 'calc(100% - 80px)' : 'calc(100% - 280px)'),
      }}
    >
      <div className="flex items-center justify-between px-4 md:px-6 py-3">
        {/* Mobile Menu Button */}
        {isMobile && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onMobileMenuToggle}
            className="p-2 hover-glow mr-3 rounded-lg bg-background/50 border border-border/30"
          >
            <Menu className="w-5 h-5" />
          </Button>
        )}

        {/* Global Search */}
        <div className="flex-1 max-w-2xl">
          <GlobalSearchBar />
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-2 md:space-x-4">
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