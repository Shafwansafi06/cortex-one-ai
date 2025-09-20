import React, { useState } from 'react';
import { Search, Mic, Settings } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { VoiceMic } from './VoiceMic';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type Role = 'exec' | 'manager' | 'agent';

export function GlobalSearchBar() {
  const [query, setQuery] = useState('');
  const [role, setRole] = useState<Role>('manager');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const roles = [
    { value: 'exec' as const, label: 'Executive', color: 'bg-secondary' },
    { value: 'manager' as const, label: 'Manager', color: 'bg-primary' },
    { value: 'agent' as const, label: 'Agent', color: 'bg-success' },
  ];

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Search:', { query, role });
    }, 2000);
  };

  const handleVoiceResult = (transcript: string) => {
    setQuery(transcript);
    setIsListening(false);
  };

  return (
    <div className="relative">
      <div className="bg-background/95 backdrop-blur-sm border border-border/50 rounded-xl p-2 md:p-4 shadow-lg">
        <div className="flex flex-col space-y-2 md:space-y-3">
          {/* Role Toggle - Mobile Optimized */}
          <div className="flex justify-center sm:justify-start">
            <div className="flex space-x-1 bg-background/60 rounded-lg p-1 border border-border/30">
              {roles.map((r) => (
                <Button
                  key={r.value}
                  variant={role === r.value ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setRole(r.value)}
                  className={cn(
                    "px-3 py-2 text-xs rounded-md transition-all duration-200 font-medium",
                    role === r.value 
                      ? `${r.color} text-white shadow-neon` 
                      : "text-muted-foreground hover:text-foreground hover:bg-background/70"
                  )}
                >
                  {r.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Search Input with Enhanced Voice Assistant */}
          <div className="relative">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask CortexOne anything..."
                className="pl-12 pr-16 h-12 bg-background/80 border-border/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/30 text-sm md:text-base rounded-xl"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
              />
              
              {/* Enhanced Voice Assistant */}
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <VoiceMic
                  isListening={isListening}
                  onStartListening={() => setIsListening(true)}
                  onStopListening={() => setIsListening(false)}
                  onTranscript={handleVoiceResult}
                  className="relative"
                />
              </div>
            </div>
            
            {/* Voice Status Indicator */}
            <AnimatePresence>
              {isListening && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-50"
                >
                  <div className="glass px-3 py-2 rounded-lg text-xs text-primary font-medium flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span>Listening...</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Quick Actions - Enhanced Mobile Design */}
        <AnimatePresence>
          {query && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-3"
            >
              {/* AI Capabilities */}
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="text-xs px-3 py-1 bg-primary/5 border-primary/20 text-primary">
                  Cross-domain analysis
                </Badge>
                <Badge variant="outline" className="text-xs px-3 py-1 bg-secondary/5 border-secondary/20 text-secondary">
                  Real-time insights
                </Badge>
                <Badge variant="outline" className="text-xs px-3 py-1 bg-success/5 border-success/20 text-success">
                  Predictive analytics
                </Badge>
              </div>
              
              {/* Search Button */}
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  onClick={handleSearch}
                  disabled={isLoading}
                  className="w-full sm:w-auto px-8 py-3 bg-gradient-primary hover:opacity-90 text-white font-medium rounded-xl"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Analyzing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Search className="w-4 h-4" />
                      <span>Search CortexOne</span>
                    </div>
                  )}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}