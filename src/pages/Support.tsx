import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Headphones, MessageSquare, TrendingUp, Phone, User, Clock } from 'lucide-react';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SupportMockup from '@/components/mockups/SupportMockup';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Support() {
  const [transcript, setTranscript] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2500);
  };

  const callAnalysis = {
    sentiment: 'Negative',
    intent: 'Billing Complaint',
    summary: 'Customer frustrated with incorrect billing charges, requests immediate refund and account review.',
    confidence: 94,
    suggestedAction: 'Escalate to Billing Team Lead',
    priority: 'High'
  };

  const recentCalls = [
    {
      id: '001',
      customer: 'John Smith',
      duration: '12:34',
      sentiment: 'Positive',
      intent: 'Product Inquiry',
      time: '2 hours ago'
    },
    {
      id: '002',
      customer: 'Sarah Johnson',
      duration: '8:15',
      sentiment: 'Neutral',
      intent: 'Technical Support',
      time: '4 hours ago'
    },
    {
      id: '003',
      customer: 'Mike Chen',
      duration: '15:22',
      sentiment: 'Negative',
      intent: 'Billing Issue',
      time: '6 hours ago'
    },
  ];

  const departments = [
    'Technical Support',
    'Billing Team',
    'Product Team',
    'Sales',
    'Management'
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
      case 'positive': return 'text-success bg-success/10 border-success/20';
      case 'negative': return 'text-destructive bg-destructive/10 border-destructive/20';
      default: return 'text-warning bg-warning/10 border-warning/20';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gradient">Customer Care AI</h1>
          <p className="text-muted-foreground mt-2">
            Intelligent call analysis and customer sentiment monitoring
          </p>
        </div>
        <Badge variant="outline" className="neon-glow">
          <MessageSquare className="w-3 h-3 mr-1" />
          Real-time Analysis
        </Badge>
      </motion.div>
  {/* Mockup */}
  <SupportMockup />

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Call Transcript Analysis */}
        <AnimatedGroup preset="slide">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Headphones className="w-5 h-5 text-primary" />
                <span>Call Analysis</span>
              </CardTitle>
              <CardDescription>
                Upload call recordings or paste transcripts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* File Upload */}
              <div className="border-2 border-dashed border-border/50 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  accept=".mp3,.wav,.mp4"
                  className="hidden"
                  id="call-upload"
                />
                <label htmlFor="call-upload" className="cursor-pointer">
                  <Phone className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">
                    Upload call recording
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    MP3, WAV, MP4 up to 50MB
                  </p>
                </label>
              </div>

              <div className="text-center text-muted-foreground">or</div>

              {/* Manual Transcript */}
              <div className="space-y-4">
                <Textarea
                  placeholder="Paste call transcript here..."
                  value={transcript}
                  onChange={(e) => setTranscript(e.target.value)}
                  className="min-h-32 glass"
                />
                
                <Button 
                  onClick={handleAnalyze}
                  disabled={!transcript.trim() || isAnalyzing}
                  className="w-full hover-glow"
                >
                  {isAnalyzing ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                      <span>Analyzing...</span>
                    </div>
                  ) : (
                    'Analyze Call'
                  )}
                </Button>
              </div>

              {/* Analysis Results */}
              {transcript && !isAnalyzing && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-4"
                >
                  <div className="glass p-4 rounded-lg space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Sentiment</span>
                      <Badge className={getSentimentColor(callAnalysis.sentiment)}>
                        {callAnalysis.sentiment}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Intent</span>
                      <span className="font-medium">{callAnalysis.intent}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Confidence</span>
                      <span className="font-medium">{callAnalysis.confidence}%</span>
                    </div>
                    
                    <div className="pt-2 border-t border-border/50">
                      <p className="text-sm text-muted-foreground mb-2">Summary</p>
                      <p className="text-sm">{callAnalysis.summary}</p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full hover-glow">
                    Route to {callAnalysis.suggestedAction}
                  </Button>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </AnimatedGroup>

        {/* Grievance Routing */}
        <AnimatedGroup preset="scale">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-secondary" />
                <span>Smart Routing</span>
              </CardTitle>
              <CardDescription>
                AI-powered ticket routing and escalation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Route to Department</label>
                  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger className="glass">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept}>
                          {dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="glass p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium">AI Recommendation</span>
                    <Badge variant="outline" className="text-primary border-primary/50">
                      {callAnalysis.priority} Priority
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Based on sentiment analysis and issue classification, this should be routed to:
                  </p>
                  <p className="font-medium mt-2">{callAnalysis.suggestedAction}</p>
                </div>

                <Button 
                  className="w-full hover-glow"
                  disabled={!selectedDepartment}
                >
                  Create Ticket & Assign
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedGroup>
      </div>

      {/* Recent Call Intelligence */}
      <AnimatedGroup preset="fade">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              <span>Recent Call Intelligence</span>
            </CardTitle>
            <CardDescription>
              Latest call analysis and sentiment trends
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCalls.map((call, index) => (
                <motion.div
                  key={call.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 glass rounded-lg hover-lift"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{call.customer}</p>
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{call.duration}</span>
                        </span>
                        <span>{call.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge className={getSentimentColor(call.sentiment)}>
                      {call.sentiment}
                    </Badge>
                    <span className="text-sm font-medium min-w-24 text-right">{call.intent}</span>
                    <Button size="sm" variant="outline" className="hover-glow">
                      View Details
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedGroup>
    </div>
  );
}