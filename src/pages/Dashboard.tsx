import React from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, Headphones, TrendingUp, FileText, Phone, Brain } from 'lucide-react';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { InsightCard } from '@/components/ui/InsightCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

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
    <div className="space-y-6 md:space-y-8 mt-4 mobile-container">
      {/* Mobile-Optimized Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-background/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-border/40 shadow-lg"
      >
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gradient">Dashboard</h1>
                <p className="text-xs md:text-sm text-muted-foreground">AI Intelligence Hub</p>
              </div>
            </div>
            <Badge variant="outline" className="neon-glow px-3 py-1 bg-background/80 border-border/50">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse mr-2" />
              Live
            </Badge>
          </div>
          
          <div className="bg-background/80 rounded-xl p-4 border border-border/40 shadow-sm">
            <h2 className="text-sm md:text-base font-medium text-foreground mb-2">
              Unified enterprise AI insights across HR, Finance, and Customer Care
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground">
              Real-time cross-domain analytics and predictive insights powered by advanced AI
            </p>
          </div>
        </div>
      </motion.div>

  {/* Metrics Overview */}
  <AnimatedGroup preset="slide" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {metricCards.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="bg-background/90 backdrop-blur-sm border border-border/40 hover-lift min-h-[120px] shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                  <Icon className={`w-5 h-5 ${metric.color}`} />
                </div>
              </CardHeader>
          <CardContent>
            <div className="text-2xl lg:text-3xl font-bold">{metric.value}</div>
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
            <CardDescription>AI efficiency scores across HR, Finance & Support</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-64 md:h-96">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorHr" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorFinance" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorSupport" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9F7AEA" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#9F7AEA" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.06} />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend verticalAlign="top" />
                  <Area type="monotone" dataKey="hr" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorHr)" />
                  <Area type="monotone" dataKey="finance" stroke="hsl(var(--secondary))" fillOpacity={1} fill="url(#colorFinance)" />
                  <Area type="monotone" dataKey="support" stroke="#9F7AEA" fillOpacity={1} fill="url(#colorSupport)" />
                </AreaChart>
              </ResponsiveContainer>
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button className="h-20 flex flex-col space-y-2 hover-glow w-full">
                <FileText className="w-6 h-6" />
                <span>Upload Resume</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 hover-glow w-full">
                <DollarSign className="w-6 h-6" />
                <span>Process Invoice</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 hover-glow w-full">
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