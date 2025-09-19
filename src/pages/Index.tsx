import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Users, DollarSign, Headphones, Zap, Shield, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedOrb } from '@/components/ui/AnimatedOrb';
import { AnimatedGroup } from '@/components/ui/animated-group';

function EnterCTA() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <Button
      size="lg"
      className="bg-gradient-primary hover:opacity-90 px-8 py-4 text-lg"
      onClick={() => {
        if (user) navigate('/dashboard');
        else navigate('/auth');
      }}
    >
      <span>Enter CortexOne</span>
      <ArrowRight className="w-5 h-5 ml-2" />
    </Button>
  );
}

export default function Index() {
  const [showDemo, setShowDemo] = useState(false);

  const features = [
    {
      icon: Users,
      title: 'HR Intelligence',
      description: 'AI-powered talent acquisition, leadership prediction, and workforce analytics',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: DollarSign,
      title: 'Finance AI',
      description: 'Automated invoice processing, GST compliance, and financial anomaly detection',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Headphones,
      title: 'Customer Care',
      description: 'Smart call analysis, sentiment monitoring, and automated ticket routing',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const benefits = [
    { icon: Zap, title: 'Real-time Insights', description: 'Cross-domain analysis in seconds' },
    { icon: Shield, title: 'Enterprise Security', description: 'SOC2 compliant with end-to-end encryption' },
    { icon: BarChart3, title: 'Predictive Analytics', description: 'Anticipate trends before they happen' },
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Animated Orb */}
            <div className="flex justify-center mb-12">
              <AnimatedOrb size="xl" />
            </div>

            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-4xl mx-auto mb-8"
            >
              <Badge variant="outline" className="mb-6 px-4 py-2 text-sm neon-glow">
                <Brain className="w-4 h-4 mr-2" />
                Enterprise AI Copilot
              </Badge>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-6">
                <span className="text-gradient">CortexOne</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/90">
                Unified AI for HR, Finance & Customer Care
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Break down silos with intelligent cross-domain insights. 
                CortexOne connects your enterprise data to deliver predictive analytics 
                and automated decision-making across all departments.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <AnimatedGroup 
              preset="scale" 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <EnterCTA />
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => setShowDemo(true)}
                className="px-8 py-4 text-lg border-primary/30 hover-glow"
              >
                Watch Demo
              </Button>
            </AnimatedGroup>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <AnimatedGroup preset="blur-slide" className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="glass-card hover-lift border-primary/20">
                      <CardHeader className="text-center">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4`}>
                          <Icon className="w-full h-full text-white" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-center">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </AnimatedGroup>
            </motion.div>
          </motion.div>
        </div>

        {/* Connecting Lines Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-20">
            <motion.line
              x1="33%"
              y1="60%"
              x2="50%"
              y2="40%"
              stroke="url(#gradient1)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1, duration: 2 }}
            />
            <motion.line
              x1="67%"
              y1="60%"
              x2="50%"
              y2="40%"
              stroke="url(#gradient2)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.5, duration: 2 }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--secondary))" />
                <stop offset="100%" stopColor="hsl(var(--primary))" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-6">
              Why Enterprise Leaders Choose CortexOne
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your organization with AI that understands the connections between 
              your people, finances, and customers.
            </p>
          </motion.div>

          <AnimatedGroup preset="slide" className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </AnimatedGroup>
        </div>
      </section>

      {/* Demo Modal */}
      {showDemo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          onClick={() => setShowDemo(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-background glass-card max-w-2xl w-full p-8 rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">CortexOne Demo</h3>
            <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-10 h-10 text-primary-foreground" />
                </div>
                <p className="text-muted-foreground">Interactive demo coming soon</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button asChild className="flex-1">
                <Link to="/demo">Try Interactive Demo</Link>
              </Button>
              <Button variant="outline" onClick={() => setShowDemo(false)}>
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Footer CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join forward-thinking organizations already using CortexOne to break down data silos 
              and unlock cross-domain insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                <Link to="/auth">
                  Get Started Free
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/30 hover-glow">
                <Link to="/dashboard">
                  View Dashboard
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}