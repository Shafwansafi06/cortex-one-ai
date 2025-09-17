import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Brain, Zap, Target, ArrowRight, Users, DollarSign, Headphones } from 'lucide-react';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AnimatedOrb } from '@/components/ui/AnimatedOrb';

export default function Demo() {
  const [activeDemo, setActiveDemo] = useState<number | null>(null);
  const [demoProgress, setDemoProgress] = useState(0);

  const runDemo = async (demoIndex: number) => {
    setActiveDemo(demoIndex);
    setDemoProgress(0);
    
    // Simulate demo progression
    const interval = setInterval(() => {
      setDemoProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setActiveDemo(null);
            setDemoProgress(0);
          }, 1000);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const demoScenarios = [
    {
      title: 'Cross-Domain Causal Analysis',
      description: 'Investigate why customer churn increased by correlating HR onboarding delays, invoice processing issues, and support ticket sentiment.',
      icon: Brain,
      color: 'text-primary bg-primary/10',
      steps: [
        'Analyzing customer churn patterns...',
        'Correlating with HR onboarding metrics...',
        'Cross-referencing invoice processing delays...',
        'Examining support ticket sentiment trends...',
        'Identifying causal relationships...',
        'Generating actionable insights...',
      ]
    },
    {
      title: 'Talent-Finance Optimization',
      description: 'Optimize hiring decisions by analyzing candidate leadership scores against department budget efficiency and ROI.',
      icon: Target,
      color: 'text-secondary bg-secondary/10',
      steps: [
        'Scanning candidate database...',
        'Evaluating leadership potential scores...',
        'Analyzing department budgets...',
        'Calculating cost-per-hire efficiency...',
        'Modeling ROI predictions...',
        'Recommending optimal hiring strategy...',
      ]
    },
    {
      title: 'Predictive Support Escalation',
      description: 'Predict and prevent support escalations by analyzing call sentiment, invoice disputes, and employee satisfaction scores.',
      icon: Zap,
      color: 'text-success bg-success/10',
      steps: [
        'Processing call transcripts...',
        'Analyzing sentiment patterns...',
        'Correlating with billing disputes...',
        'Checking employee satisfaction metrics...',
        'Modeling escalation probability...',
        'Suggesting preventive actions...',
      ]
    }
  ];

  const getDemoResults = (index: number) => {
    const results = [
      {
        insight: 'Critical correlation discovered',
        details: '87% correlation between 3+ day invoice delays and customer churn within 30 days',
        actions: ['Expedite invoice processing', 'Implement early warning system', 'Enhance onboarding efficiency']
      },
      {
        insight: 'Optimal hiring window identified',
        details: 'Candidates with 85%+ leadership scores in Q1 show 23% higher ROI by year-end',
        actions: ['Prioritize high-scoring candidates', 'Adjust Q1 budget allocation', 'Implement predictive hiring']
      },
      {
        insight: 'Escalation pattern detected',
        details: 'Billing disputes increase 340% when employee satisfaction drops below 75%',
        actions: ['Monitor employee sentiment', 'Proactive billing communication', 'Cross-train support staff']
      }
    ];
    return results[index];
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="flex justify-center mb-6">
          <AnimatedOrb size="md" />
        </div>
        <h1 className="text-3xl font-bold text-gradient mb-4">CortexOne Demo Flows</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience the power of cross-domain AI analysis with our interactive demo scenarios.
          Each demo showcases real enterprise use cases and AI-driven insights.
        </p>
      </motion.div>

      {/* Demo Scenarios */}
      <AnimatedGroup preset="blur-slide" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {demoScenarios.map((demo, index) => {
          const Icon = demo.icon;
          const isActive = activeDemo === index;
          const isCompleted = activeDemo === index && demoProgress === 100;
          
          return (
            <Card 
              key={index} 
              className={`glass-card transition-all duration-300 ${
                isActive ? 'ring-2 ring-primary/50 neon-glow' : 'hover-lift'
              }`}
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg ${demo.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{demo.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="mt-3">
                  {demo.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Progress Indicator */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="space-y-3"
                  >
                    <div className="text-sm font-medium text-primary">
                      {demo.steps[Math.floor(demoProgress / (100 / demo.steps.length))]}
                    </div>
                    <Progress value={demoProgress} className="h-2" />
                  </motion.div>
                )}

                {/* Demo Results */}
                {isCompleted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass p-4 rounded-lg space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full" />
                      <span className="text-sm font-medium text-success">
                        {getDemoResults(index).insight}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {getDemoResults(index).details}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {getDemoResults(index).actions.map((action, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {action}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Action Button */}
                <Button
                  onClick={() => runDemo(index)}
                  disabled={activeDemo !== null}
                  className={`w-full hover-glow ${isActive ? 'animate-pulse' : ''}`}
                  variant={isCompleted ? "outline" : "default"}
                >
                  {isActive ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                      <span>Running Demo</span>
                    </div>
                  ) : isCompleted ? (
                    <>
                      <span>Demo Complete</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      <span>Run Demo</span>
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </AnimatedGroup>

      {/* Key Benefits */}
      <AnimatedGroup preset="fade">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Why CortexOne Demos Matter</CardTitle>
            <CardDescription>
              These scenarios demonstrate real enterprise challenges solved by AI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold">Cross-Domain Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Uncover hidden correlations between HR, Finance, and Support data
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <DollarSign className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold">Predictive Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Anticipate problems before they impact business outcomes
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                  <Headphones className="w-8 h-8 text-success" />
                </div>
                <h3 className="font-semibold">Automated Actions</h3>
                <p className="text-sm text-muted-foreground">
                  Generate actionable recommendations with confidence scores
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedGroup>

      {/* Call to Action */}
      <AnimatedGroup preset="scale">
        <Card className="glass-card text-center">
          <CardContent className="pt-8">
            <h3 className="text-xl font-semibold mb-4">Ready to see CortexOne in action?</h3>
            <p className="text-muted-foreground mb-6">
              Schedule a personalized demo with your own enterprise data
            </p>
            <Button className="bg-gradient-primary hover:opacity-90">
              <span>Schedule Live Demo</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </AnimatedGroup>
    </div>
  );
}