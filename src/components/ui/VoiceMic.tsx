import React, { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface VoiceMicProps {
  isListening: boolean;
  onStartListening: () => void;
  onStopListening: () => void;
  onTranscript: (transcript: string) => void;
  className?: string;
}

interface SpeechRecognition {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onstart: () => void;
  onresult: (event: any) => void;
  onend: () => void;
  onerror: (event: any) => void;
}

export function VoiceMic({
  isListening,
  onStartListening,
  onStopListening,
  onTranscript,
  className
}: VoiceMicProps) {
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onstart = () => {
        console.log('Voice recognition started');
      };

      recognitionInstance.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');

        if (event.results[0].isFinal) {
          onTranscript(transcript);
          onStopListening();
        }
      };

      recognitionInstance.onend = () => {
        onStopListening();
      };

      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        onStopListening();
      };

      setRecognition(recognitionInstance);
    }
  }, [onTranscript, onStopListening]);

  const toggleListening = () => {
    if (!recognition) return;

    if (isListening) {
      recognition.stop();
      onStopListening();
    } else {
      recognition.start();
      onStartListening();
    }
  };

  return (
    <div className={cn("relative", className)}>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={toggleListening}
        className={cn(
          "relative p-2 rounded-full transition-all duration-200",
          isListening 
            ? "text-primary bg-primary/10 mic-active" 
            : "text-muted-foreground hover:text-primary hover-glow"
        )}
      >
        {isListening ? (
          <MicOff className="w-4 h-4" />
        ) : (
          <Mic className="w-4 h-4" />
        )}

        {/* Ripple Effects */}
        <AnimatePresence>
          {isListening && (
            <>
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border-2 border-primary"
                  initial={{ scale: 0.8, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeOut"
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </Button>

      {/* Status Indicator */}
      <AnimatePresence>
        {isListening && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
          >
            <div className="glass px-2 py-1 rounded text-xs text-primary">
              Listening...
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
