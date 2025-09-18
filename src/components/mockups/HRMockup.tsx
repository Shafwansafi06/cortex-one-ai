import React from 'react';
import { Users, FileText, BarChart2, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function HRMockup() {
  const [pipeline, setPipeline] = useState<Array<{stage: string; count: number}>>([]);
  const [diversity, setDiversity] = useState<Array<{label: string; value: number}>>([]);

  useEffect(() => {
    fetch('/mock-data/hr.json')
      .then((r) => r.json())
      .then((data) => {
        setPipeline(data.pipeline || []);
        setDiversity(data.diversity || []);
      })
      .catch(() => {});
  }, []);
  const candidate = {
    name: 'Sarah Chen',
    title: 'Senior Frontend Engineer',
    location: 'Singapore',
    match: 92,
    leadership: 87,
    skills: ['React', 'TypeScript', 'Node.js', 'ML'],
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-card col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-primary" />
              <span>Candidate Snapshot</span>
            </CardTitle>
            <CardDescription>Quick view of candidate fit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">SC</div>
              <div>
                <div className="text-lg font-bold">{candidate.name}</div>
                <div className="text-sm text-muted-foreground">{candidate.title} • {candidate.location}</div>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Match Score</span>
                <span className="font-medium">{candidate.match}%</span>
              </div>
              <Progress value={candidate.match} className="h-2" />
              <div className="flex justify-between text-sm">
                <span>Leadership</span>
                <span className="font-medium">{candidate.leadership}%</span>
              </div>
              <Progress value={candidate.leadership} className="h-2" />
            </div>

            <div className="mt-4">
              <div className="text-sm font-medium mb-2">Top Skills</div>
              <div className="flex flex-wrap gap-2">
                {candidate.skills.map((s) => (
                  <Badge key={s} variant="outline">{s}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-primary" />
              <span>Resume Insights</span>
            </CardTitle>
            <CardDescription>Extracted highlights and suggested interview questions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Summary</p>
                <p className="mt-2 text-sm">High-performing frontend engineer with experience in building scalable React apps and a strong background in TypeScript and ML-enabled features.</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Suggested Questions</p>
                <ul className="mt-2 text-sm list-disc list-inside space-y-1">
                  <li>Explain a recent performance optimization you implemented in React.</li>
                  <li>How have you used ML models in frontend features?</li>
                  <li>Describe an architecture decision that improved developer velocity.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart2 className="w-5 h-5 text-secondary" />
              <span>Org Funnel</span>
            </CardTitle>
            <CardDescription>Pipeline stages and conversion</CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ width: '100%', height: 180 }}>
              <ResponsiveContainer>
                <BarChart data={pipeline}>
                  <XAxis dataKey="stage" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-success" />
              <span>Retention Risk</span>
            </CardTitle>
            <CardDescription>Signals that predict attrition risk</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-sm">At-risk Employees</div>
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between"><span className="text-sm">Jane Doe</span><Badge variant="outline" className="text-warning">High</Badge></div>
                <div className="flex items-center justify-between"><span className="text-sm">Bob Smith</span><Badge variant="outline" className="text-warning">Medium</Badge></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-primary" />
              <span>Diversity</span>
            </CardTitle>
            <CardDescription>Quick demographic breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ width: '100%', height: 180 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={diversity} dataKey="value" nameKey="label" outerRadius={60} fill="#8884d8">
                    {diversity.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--secondary))'} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
