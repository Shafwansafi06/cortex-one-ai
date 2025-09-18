import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedOrbProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-32 h-32',
  lg: 'w-48 h-48',
  xl: 'w-64 h-64',
};

export function AnimatedOrb({ size = 'lg', className }: AnimatedOrbProps) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {/* Main Orb */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className={cn(
          "relative rounded-full bg-gradient-primary overflow-hidden",
          sizeClasses[size]
        )}
      >
        {/* Inner glow */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary-bright/30 to-secondary/30 blur-sm" />
        
        {/* Core light */}
        <div className="absolute inset-4 rounded-full bg-white/20 blur-md animate-pulse" />
        
        {/* Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full"
            initial={{
              x: "50%",
              y: "50%",
              scale: 0,
            }}
            animate={{
              x: `${50 + Math.cos((i * Math.PI) / 4) * 40}%`,
              y: `${50 + Math.sin((i * Math.PI) / 4) * 40}%`,
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Static logo positioned above the rotating orb, sized to match the orb and clipped to a circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={cn("rounded-full overflow-hidden flex items-center justify-center pointer-events-none", sizeClasses[size])}>
          <img src="/logo.svg" alt="CortexOne logo" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Outer rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute border border-primary/20 rounded-full"
          style={{
            width: `${150 + ring * 30}%`,
            height: `${150 + ring * 30}%`,
          }}
          animate={{
            rotate: ring % 2 === 0 ? 360 : -360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { 
              duration: 15 + ring * 5, 
              repeat: Infinity, 
              ease: "linear" 
            },
            scale: { 
              duration: 6 + ring, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: ring * 0.5,
            },
          }}
        />
      ))}

      {/* Spark effects */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`spark-${i}`}
          className="absolute w-px h-4 bg-gradient-to-t from-primary to-transparent origin-bottom"
          style={{
            left: "50%",
            top: "50%",
            transformOrigin: "bottom center",
          }}
          initial={{ 
            rotate: i * 60,
            scaleY: 0,
            opacity: 0,
          }}
          animate={{
            rotate: i * 60,
            scaleY: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}