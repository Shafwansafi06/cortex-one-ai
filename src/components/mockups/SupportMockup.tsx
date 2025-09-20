import React from 'react';
import { Headphones, MessageSquare, Clock, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SupportMockup() {
  const sample = {
    sentiment: 'Negative',
    intent: 'Billing Complaint',
    summary: 'Incorrect billing charges; customer requests refund',
    confidence: 92,
    priority: 'High'
  };

  const recent = [
    { id: '001', customer: 'John Smith', duration: '12:34', sentiment: 'Positive' },
    { id: '002', customer: 'Sarah Johnson', duration: '8:15', sentiment: 'Neutral' },
    { id: '003', customer: 'Mike Chen', duration: '15:22', sentiment: 'Negative' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Headphones className="w-5 h-5 text-primary" />
              <span>Call Triage</span>
            </CardTitle>
            <CardDescription>Realtime transcription & routing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm">
              <div className="flex justify-between"><span>Intent</span><span className="font-medium">{sample.intent}</span></div>
              <div className="flex justify-between"><span>Sentiment</span><Badge className="text-destructive">{sample.sentiment}</Badge></div>
              <div className="mt-2 text-sm text-muted-foreground">{sample.summary}</div>
              <div className="mt-4">
                <button className="btn btn-primary w-full">Route to Billing Team</button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-secondary" />
              <span>SLA Overview</span>
            </CardTitle>
            <CardDescription>Queue health and SLAs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm text-muted-foreground">SLA met (last 24h)</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            <span>Recent Calls</span>
          </CardTitle>
          <CardDescription>Latest call summaries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recent.map((r) => (
              <div key={r.id} className="p-3 glass rounded-md">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{r.customer}</div>
                    <div className="text-sm text-muted-foreground">{r.duration}</div>
                  </div>
                  <Badge className="text-muted-foreground">{r.sentiment}</Badge>
                </div>
                <button className="w-full btn btn-outline hover-glow">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
