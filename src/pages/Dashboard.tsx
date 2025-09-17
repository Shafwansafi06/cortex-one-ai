import React from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, Headphones, TrendingUp, FileText, Phone } from 'lucide-react';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { InsightCard } from '@/components/ui/InsightCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const metricCards = [
  {
    title: 'Active Talent Pool',
    value: '2,847',
    change: '+12%',
    trend: 'up',
    icon: Users,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
  },
  {
    title: 'Outstanding Invoices',
    value: '$1.2M',
    change: '-8%',
    trend: 'down',
    icon: DollarSign,
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
  },
  {
    title: 'Support Tickets',
    value: '124',
    change: '+23%',
    trend: 'up',
    icon: Headphones,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
  },
];

const recentInsights = [
  {
    title: 'Cross-Domain Analysis: Churn Spike Correlation',
    summary: 'Customer churn increased 15% correlating with delayed invoice processing and reduced HR onboarding efficiency.',
    sources: [
      { domain: 'finance' as const, title: 'Invoice Processing', confidence: 89 },
      { domain: 'hr' as const, title: 'Onboarding Metrics', confidence: 76 },
      { domain: 'support' as const, title: 'Customer Sentiment', confidence: 92 },
    ],
    details: [
      'Invoice processing delays averaged 12 days vs 5 day target',
      'New hire onboarding completion dropped from 85% to 67%',
      'Customer sentiment scores decreased 18% in affected regions',
      'Correlation coefficient of 0.83 between delayed invoices and churn',
    ],
    actions: [
      { id: '1', label: 'Expedite Invoice Processing', type: 'primary' as const },
      { id: '2', label: 'Review HR Workflows', type: 'secondary' as const },
      { id: '3', label: 'Alert Customer Success', type: 'secondary' as const },
    ],
  },
];

const chartData = [
  { name: 'Jan', hr: 85, finance: 92, support: 78 },
  { name: 'Feb', hr: 88, finance: 89, support: 82 },
  { name: 'Mar', hr: 82, finance: 94, support: 85 },
  { name: 'Apr', hr: 90, finance: 87, support: 88 },
  { name: 'May', hr: 94, finance: 91, support: 92 },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gradient">CortexOne Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Unified enterprise AI insights across HR, Finance, and Customer Care
          </p>
        </div>
        <Badge variant="outline" className="neon-glow">
          Real-time Analytics
        </Badge>
      </motion.div>

      {/* Metrics Overview */}
      <AnimatedGroup preset="slide" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metricCards.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="glass-card hover-lift">
              <CardHeader className="flex flex-row items-center justify-between pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                  <Icon className={`w-5 h-5 ${metric.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center space-x-1 text-xs">
                  <TrendingUp 
                    className={`w-3 h-3 ${
                      metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                    }`} 
                  />
                  <span className={
                    metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }>
                    {metric.change}
                  </span>
                  <span className="text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </AnimatedGroup>

      {/* Cross-Domain Performance Chart */}
      <AnimatedGroup preset="fade">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Cross-Domain Performance Trends</CardTitle>
            <CardDescription>AI efficiency scores across all domains</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              Performance analytics visualization coming soon
            </div>
          </CardContent>
        </Card>
      </AnimatedGroup>

      {/* Recent AI Insights */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Recent AI Insights</h2>
        <AnimatedGroup preset="blur-slide" className="space-y-4">
          {recentInsights.map((insight, index) => (
            <InsightCard key={index} {...insight} />
          ))}
        </AnimatedGroup>
      </div>

      {/* Quick Actions */}
      <AnimatedGroup preset="scale">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common workflows and uploads</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="h-20 flex flex-col space-y-2 hover-glow">
                <FileText className="w-6 h-6" />
                <span>Upload Resume</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 hover-glow">
                <DollarSign className="w-6 h-6" />
                <span>Process Invoice</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 hover-glow">
                <Phone className="w-6 h-6" />
                <span>Upload Call Recording</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </AnimatedGroup>
    </div>
  );
}