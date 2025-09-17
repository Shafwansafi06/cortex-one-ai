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
      <div className="glass-card p-3">
        <div className="flex items-center space-x-3">
          {/* Role Toggle */}
          <div className="flex space-x-1">
            {roles.map((r) => (
              <Button
                key={r.value}
                variant={role === r.value ? "default" : "ghost"}
                size="sm"
                onClick={() => setRole(r.value)}
                className={cn(
                  "px-3 py-1 text-xs rounded-full transition-all duration-200",
                  role === r.value 
                    ? `${r.color} text-white shadow-neon` 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {r.label}
              </Button>
            ))}
          </div>

          {/* Search Input */}
          <div className="flex-1 relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask CortexOne anything..."
                className="pl-10 pr-20 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
              />
              
              {/* Loading Animation */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute right-12 top-1/2 transform -translate-y-1/2"
                  >
                    <div className="flex space-x-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{
                            y: [-2, -6, -2],
                          }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                          className="w-1 h-1 bg-primary rounded-full"
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Voice Mic */}
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <VoiceMic
                  isListening={isListening}
                  onStartListening={() => setIsListening(true)}
                  onStopListening={() => setIsListening(false)}
                  onTranscript={handleVoiceResult}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <AnimatePresence>
          {query && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 flex items-center justify-between"
            >
              <div className="flex space-x-2">
                <Badge variant="outline" className="text-xs">
                  Cross-domain analysis
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Real-time insights
                </Badge>
              </div>
              <Button 
                size="sm" 
                onClick={handleSearch}
                disabled={isLoading}
                className="hover-glow"
              >
                {isLoading ? "Analyzing..." : "Search"}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}