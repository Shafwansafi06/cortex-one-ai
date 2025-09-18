import React from 'react';
import { DollarSign, FileText, AlertTriangle, CheckCircle, PieChart as PieIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';

export default function FinanceMockup() {
  const [outstanding, setOutstanding] = useState<Array<any>>([]);
  const [gst, setGst] = useState<Array<any>>([]);

  const invoice = {
    vendor: 'Acme Corp',
    amount: 15750,
    gst: 1575,
    total: 17325,
    anomalies: [
      { type: 'warning', message: 'GST looks high for category' }
    ]
  };

  useEffect(() => {
    fetch('/mock-data/finance.json')
      .then((r) => r.json())
      .then((data) => {
        setOutstanding(data.outstanding || []);
        setGst(data.gst || []);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-primary" />
              <span>Invoice Quick View</span>
            </CardTitle>
            <CardDescription>Extracted fields and suggested actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Vendor</span><span className="font-medium">{invoice.vendor}</span></div>
              <div className="flex justify-between"><span>Amount</span><span className="font-medium">${invoice.amount.toLocaleString()}</span></div>
              <div className="flex justify-between"><span>GST</span><span className="font-medium">${invoice.gst.toLocaleString()}</span></div>
              <div className="flex justify-between"><span className="font-bold">Total</span><span className="font-bold">${invoice.total.toLocaleString()}</span></div>
            </div>
            {invoice.anomalies.length > 0 && (
              <div className="mt-4">
                <div className="p-3 rounded-lg bg-warning/10 border border-warning/20 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  <div className="text-sm">{invoice.anomalies[0].message}</div>
                </div>
              </div>
            )}
            <div className="mt-4 flex gap-2">
              <button className="btn btn-primary flex-1">Approve</button>
              <button className="btn btn-outline flex-1">Flag</button>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChart className="w-5 h-5 text-secondary" />
              <span>GST Compliance</span>
            </CardTitle>
            <CardDescription>High-level compliance overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ width: '100%', height: 180 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={gst} dataKey="value" nameKey="name" outerRadius={60}>
                    {gst.map((entry: any, i: number) => (
                      <Cell key={`c-${i}`} fill={i === 0 ? 'hsl(var(--success))' : i === 1 ? 'hsl(var(--warning))' : 'hsl(var(--destructive))'} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <DollarSign className="w-5 h-5 text-primary" />
            <span>Outstanding Invoices</span>
          </CardTitle>
          <CardDescription>Monthly outstanding vs paid</CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{ width: '100%', height: 240 }}>
            <ResponsiveContainer>
              <LineChart data={outstanding}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="outstanding" stroke="hsl(var(--primary))" strokeWidth={2} />
                <Line type="monotone" dataKey="paid" stroke="hsl(var(--secondary))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
