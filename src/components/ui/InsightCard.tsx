import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Users, DollarSign, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Action {
  id: string;
  label: string;
  type: 'primary' | 'secondary' | 'destructive';
  icon?: React.ReactNode;
}

interface Source {
  domain: 'hr' | 'finance' | 'support';
  title: string;
  confidence: number;
}

interface InsightCardProps {
  title: string;
  summary: string;
  details?: string[];
  sources?: Source[];
  actions?: Action[];
  className?: string;
  expanded?: boolean;
}

const domainIcons = {
  hr: Users,
  finance: DollarSign,
  support: Headphones,
};

const domainColors = {
  hr: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  finance: 'text-green-400 bg-green-400/10 border-green-400/20',
  support: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
};

export function InsightCard({
  title,
  summary,
  details,
  sources,
  actions,
  className,
  expanded: controlledExpanded,
}: InsightCardProps) {
  const [isExpanded, setIsExpanded] = useState(controlledExpanded || false);

  const hasExpandableContent = details && details.length > 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={cn(
        "glass-card hover-lift hover:border-primary/30 transition-all duration-300",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{summary}</p>
        </div>
        
        {hasExpandableContent && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-4 p-2 hover-glow"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </Button>
        )}
      </div>

      {/* Sources */}
      {sources && sources.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {sources.map((source, index) => {
            const Icon = domainIcons[source.domain];
            return (
              <Badge
                key={index}
                variant="outline"
                className={cn(
                  "flex items-center space-x-1 text-xs",
                  domainColors[source.domain]
                )}
              >
                <Icon className="w-3 h-3" />
                <span>{source.title}</span>
                <span className="opacity-70">({source.confidence}%)</span>
              </Badge>
            );
          })}
        </div>
      )}

      {/* Expandable Details */}
      <AnimatePresence>
        {isExpanded && details && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-3"
          >
            <div className="border-t border-border/50 pt-4">
              <h4 className="text-sm font-medium text-foreground mb-3">Detailed Analysis</h4>
              <ul className="space-y-2">
                {details.map((detail, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actions */}
      {actions && actions.length > 0 && (
        <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap gap-2">
          {actions.map((action) => (
            <Button
              key={action.id}
              variant={action.type === 'primary' ? 'default' : action.type === 'destructive' ? 'destructive' : 'outline'}
              size="sm"
              className="hover-glow"
            >
              {action.icon && <span className="mr-2">{action.icon}</span>}
              {action.label}
            </Button>
          ))}
        </div>
      )}
    </motion.div>
  );
}