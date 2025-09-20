import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Users, Target, Brain, FileText, Github } from 'lucide-react';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import HRMockup from '@/components/mockups/HRMockup';
import { Progress } from '@/components/ui/progress';

export default function HR() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 3000);
  };

  const demoCandidate = {
    name: 'Sarah Chen',
    email: 'sarah.chen@email.com',
    experience: 5,
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'ML'],
    leadershipScore: 87,
    match: 92,
  };

  const talentPool = [
    { name: 'Alex Johnson', role: 'Senior Developer', score: 89, status: 'Available' },
    { name: 'Maria Garcia', role: 'Product Manager', score: 94, status: 'Interviewing' },
    { name: 'David Kim', role: 'Data Scientist', score: 91, status: 'Available' },
  ];

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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gradient">HR Intelligence</h1>
                <p className="text-xs md:text-sm text-muted-foreground">Talent Acquisition AI</p>
              </div>
            </div>
            <Badge variant="outline" className="neon-glow px-3 py-1 bg-background/80 border-blue-500/40">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2" />
              AI Active
            </Badge>
          </div>
          
          <div className="bg-background/80 rounded-xl p-4 border border-border/40 shadow-sm">
            <h2 className="text-sm md:text-base font-medium text-foreground mb-2">
              AI-powered talent acquisition and workforce analytics
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground">
              Intelligent candidate matching, leadership prediction, and comprehensive workforce insights
            </p>
          </div>
        </div>
      </motion.div>
  {/* Mockup */}
  <HRMockup />

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Resume Upload & Analysis */}
        <AnimatedGroup preset="slide">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="w-5 h-5 text-primary" />
                <span>Resume Analysis</span>
              </CardTitle>
              <CardDescription>
                Upload resumes for AI-powered candidate evaluation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* File Upload */}
              <div className="border-2 border-dashed border-border/50 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                  className="hidden"
                  id="resume-upload"
                />
                <label htmlFor="resume-upload" className="cursor-pointer">
                  <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Drop your resume here or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PDF, DOC, DOCX up to 10MB
                  </p>
                </label>
              </div>

              {/* Analysis Results */}
              {uploadedFile && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Analyzing: {uploadedFile.name}</span>
                    {isAnalyzing && (
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent" />
                    )}
                  </div>

                  {!isAnalyzing && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="glass p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground">Match Score</p>
                          <p className="text-2xl font-bold text-success">{demoCandidate.match}%</p>
                        </div>
                        <div className="glass p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground">Leadership</p>
                          <p className="text-2xl font-bold text-primary">{demoCandidate.leadershipScore}%</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium mb-2">Extracted Skills</p>
                        <div className="flex flex-wrap gap-2">
                          {demoCandidate.skills.map((skill) => (
                            <Badge key={skill} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </CardContent>
          </Card>
        </AnimatedGroup>

        {/* Leadership Predictor */}
        <AnimatedGroup preset="scale">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-secondary" />
                <span>Leadership Predictor</span>
              </CardTitle>
              <CardDescription>
                AI assessment of leadership potential
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="hsl(var(--border))"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="hsl(var(--secondary))"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${(demoCandidate.leadershipScore / 100) * 351.86} 351.86`}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-secondary">
                      {demoCandidate.leadershipScore}%
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  High leadership potential detected
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Communication</span>
                  <span className="font-medium">92%</span>
                </div>
                <Progress value={92} className="h-2" />
                
                <div className="flex justify-between text-sm">
                  <span>Strategic Thinking</span>
                  <span className="font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
                
                <div className="flex justify-between text-sm">
                  <span>Team Management</span>
                  <span className="font-medium">89%</span>
                </div>
                <Progress value={89} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </AnimatedGroup>
      </div>

      {/* Talent Pool */}
      <AnimatedGroup preset="fade">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-primary" />
              <span>Active Talent Pool</span>
            </CardTitle>
            <CardDescription>
              Current candidates in the recruitment pipeline
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {talentPool.map((candidate, index) => (
                <motion.div
                  key={candidate.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 glass rounded-lg hover-lift"
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-primary-foreground">
                        {candidate.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{candidate.name}</p>
                      <p className="text-sm text-muted-foreground">{candidate.role}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge
                        variant={candidate.status === 'Available' ? 'outline' : 'secondary'}
                        className={candidate.status === 'Available' ? 'text-success border-success' : ''}
                      >
                        {candidate.status}
                      </Badge>
                      <span className="text-sm font-medium">{candidate.score}%</span>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full hover-glow"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Profile
                  </Button>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedGroup>
    </div>
  );
}