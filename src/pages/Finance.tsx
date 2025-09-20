import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, DollarSign, AlertTriangle, CheckCircle, FileText, Calculator } from 'lucide-react';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import FinanceMockup from '@/components/mockups/FinanceMockup';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

export default function Finance() {
  const [uploadedInvoice, setUploadedInvoice] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInvoiceUpload = (file: File) => {
    setUploadedInvoice(file);
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
    }, 3000);
  };

  const invoiceData = {
    vendor: 'Acme Corp Solutions',
    amount: 15750.00,
    gst: 1575.00,
    total: 17325.00,
    dueDate: '2024-01-15',
    invoiceNumber: 'INV-2024-001',
    anomalies: [
      { type: 'warning', message: 'GST rate appears high for this vendor category' },
      { type: 'info', message: 'Amount exceeds approval threshold - requires manager sign-off' }
    ]
  };

  const outstandingInvoices = [
    { month: 'Nov', outstanding: 180000, paid: 320000 },
    { month: 'Dec', outstanding: 220000, paid: 280000 },
    { month: 'Jan', outstanding: 150000, paid: 350000 },
  ];

  const gstData = [
    { name: 'Compliant', value: 85, color: 'hsl(var(--success))' },
    { name: 'Pending Review', value: 12, color: 'hsl(var(--warning))' },
    { name: 'Non-Compliant', value: 3, color: 'hsl(var(--destructive))' },
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gradient">Finance AI</h1>
                <p className="text-xs md:text-sm text-muted-foreground">Financial Intelligence</p>
              </div>
            </div>
            <Badge variant="outline" className="neon-glow px-3 py-1 bg-background/80 border-green-500/40">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2" />
              Processing
            </Badge>
          </div>
          
          <div className="bg-background/80 rounded-xl p-4 border border-border/40 shadow-sm">
            <h2 className="text-sm md:text-base font-medium text-foreground mb-2">
              Automated invoice processing and financial intelligence
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground">
              Smart invoice analysis, GST compliance, and automated financial anomaly detection
            </p>
          </div>
        </div>
      </motion.div>
  {/* Mockup */}
  <FinanceMockup />

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Invoice Upload */}
        <AnimatedGroup preset="slide">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="w-5 h-5 text-primary" />
                <span>Invoice Processing</span>
              </CardTitle>
              <CardDescription>
                Upload invoices for automated extraction and validation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* File Upload */}
              <div className="border-2 border-dashed border-border/50 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => e.target.files?.[0] && handleInvoiceUpload(e.target.files[0])}
                  className="hidden"
                  id="invoice-upload"
                />
                <label htmlFor="invoice-upload" className="cursor-pointer">
                  <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Drop invoice here or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PDF, JPG, PNG up to 10MB
                  </p>
                </label>
              </div>

              {/* Processing Results */}
              {uploadedInvoice && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Processing: {uploadedInvoice.name}</span>
                    {isProcessing && (
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent" />
                    )}
                  </div>

                  {!isProcessing && (
                    <div className="space-y-4">
                      <div className="glass p-4 rounded-lg space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Vendor</span>
                          <span className="font-medium">{invoiceData.vendor}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Amount</span>
                          <span className="font-medium">${invoiceData.amount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">GST</span>
                          <span className="font-medium">${invoiceData.gst.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t border-border/50 pt-2">
                          <span className="font-medium">Total</span>
                          <span className="font-bold text-lg">${invoiceData.total.toLocaleString()}</span>
                        </div>
                      </div>

                      {/* Anomalies */}
                      {invoiceData.anomalies.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Detected Issues</p>
                          {invoiceData.anomalies.map((anomaly, index) => (
                            <div
                              key={index}
                              className={`flex items-start space-x-2 p-3 rounded-lg ${
                                anomaly.type === 'warning' 
                                  ? 'bg-warning/10 border border-warning/20' 
                                  : 'bg-primary/10 border border-primary/20'
                              }`}
                            >
                              <AlertTriangle className={`w-4 h-4 mt-0.5 ${
                                anomaly.type === 'warning' ? 'text-warning' : 'text-primary'
                              }`} />
                              <span className="text-sm">{anomaly.message}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex space-x-2">
                        <Button className="flex-1 hover-glow">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                        <Button variant="outline" className="flex-1 hover-glow">
                          Review
                        </Button>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </CardContent>
          </Card>
        </AnimatedGroup>

        {/* GST Compliance */}
        <AnimatedGroup preset="scale">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>GST Compliance</span>
              </CardTitle>
              <CardDescription>
                Real-time compliance monitoring
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-success mb-2">85%</p>
                    <p className="text-sm text-muted-foreground">GST Compliant</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Compliant: 85%</span>
                        <span>Pending: 12%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Non-Compliant: 3%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedGroup>
      </div>

      {/* Outstanding Invoices Chart */}
      <AnimatedGroup preset="fade">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-primary" />
              <span>Invoice Status Overview</span>
            </CardTitle>
            <CardDescription>
              Outstanding vs paid invoices over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-64 md:h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={outstandingInvoices} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.06} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="outstanding" stroke="hsl(var(--primary))" strokeWidth={2} />
                  <Line type="monotone" dataKey="paid" stroke="hsl(var(--secondary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </AnimatedGroup>
    </div>
  );
}