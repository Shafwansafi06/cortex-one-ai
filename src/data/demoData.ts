// Demo data for CortexOne showcases

export const demoResumes = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah.chen@email.com',
    phone: '+1 (555) 123-4567',
    experience: 5,
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'Machine Learning', 'AWS'],
    education: 'MS Computer Science, Stanford University',
    leadershipScore: 87,
    matchScore: 92,
    summary: 'Senior full-stack developer with extensive experience in AI/ML applications and team leadership.',
    previousRoles: [
      { title: 'Senior Developer', company: 'TechCorp', duration: '2021-2024' },
      { title: 'Full Stack Developer', company: 'StartupXYZ', duration: '2019-2021' }
    ]
  },
  {
    id: '2',
    name: 'Alex Rodriguez',
    email: 'alex.rodriguez@email.com',
    phone: '+1 (555) 987-6543',
    experience: 8,
    skills: ['Product Management', 'Agile', 'Data Analysis', 'SQL', 'Tableau'],
    education: 'MBA, Wharton School',
    leadershipScore: 94,
    matchScore: 89,
    summary: 'Experienced product manager with proven track record of launching successful B2B SaaS products.',
    previousRoles: [
      { title: 'Senior Product Manager', company: 'BigTech Inc', duration: '2020-2024' },
      { title: 'Product Analyst', company: 'DataCorp', duration: '2018-2020' }
    ]
  }
];

export const demoInvoices = [
  {
    id: 'INV-2024-001',
    vendor: 'Acme Corp Solutions',
    amount: 15750.00,
    gst: 1575.00,
    total: 17325.00,
    dueDate: '2024-01-15',
    issueDate: '2023-12-16',
    category: 'Software Services',
    status: 'pending_review',
    anomalies: [
      { type: 'warning', message: 'GST rate appears high for this vendor category', severity: 'medium' },
      { type: 'info', message: 'Amount exceeds approval threshold - requires manager sign-off', severity: 'low' }
    ],
    confidence: 89
  },
  {
    id: 'INV-2024-002',
    vendor: 'Office Supplies Pro',
    amount: 2340.50,
    gst: 234.05,
    total: 2574.55,
    dueDate: '2024-01-20',
    issueDate: '2023-12-21',
    category: 'Office Supplies',
    status: 'approved',
    anomalies: [],
    confidence: 96
  },
  {
    id: 'INV-2024-003',
    vendor: 'CloudHost Services',
    amount: 8900.00,
    gst: 890.00,
    total: 9790.00,
    dueDate: '2024-02-01',
    issueDate: '2024-01-02',
    category: 'Infrastructure',
    status: 'processing',
    anomalies: [
      { type: 'error', message: 'Duplicate invoice detected from same vendor', severity: 'high' }
    ],
    confidence: 78
  }
];

export const demoCalls = [
  {
    id: 'CALL-001',
    customer: 'John Smith',
    customerEmail: 'john.smith@customer.com',
    duration: '12:34',
    timestamp: '2024-01-15T14:30:00Z',
    transcript: `Customer: Hi, I\'m calling about my recent invoice. I was charged twice for the same service.
    Agent: I understand your concern. Let me look up your account and check the billing history.
    Customer: This is really frustrating. I\'ve been a loyal customer for 3 years and this kind of error is unacceptable.
    Agent: I sincerely apologize for the inconvenience. I can see the duplicate charge and I\'ll process a refund immediately.`,
    sentiment: 'Negative',
    sentimentScore: 0.25,
    intent: 'Billing Complaint',
    confidence: 94,
    summary: 'Customer frustrated with duplicate billing charges, requests immediate refund and account review.',
    suggestedActions: [
      'Process immediate refund',
      'Review billing system for errors',
      'Follow up with customer satisfaction survey'
    ],
    priority: 'High',
    tags: ['billing', 'duplicate_charge', 'refund', 'escalation']
  },
  {
    id: 'CALL-002',
    customer: 'Sarah Johnson',
    customerEmail: 'sarah.j@company.com',
    duration: '8:15',
    timestamp: '2024-01-15T10:15:00Z',
    transcript: `Customer: I need help setting up the new software integration.
    Agent: I\'d be happy to help. Which system are you trying to integrate with?
    Customer: We\'re using Salesforce and need to sync customer data.
    Agent: Perfect, I can walk you through the setup process step by step.`,
    sentiment: 'Neutral',
    sentimentScore: 0.6,
    intent: 'Technical Support',
    confidence: 91,
    summary: 'Customer needs assistance with Salesforce integration setup. Positive interaction.',
    suggestedActions: [
      'Provide detailed integration guide',
      'Schedule follow-up call',
      'Add to technical documentation feedback'
    ],
    priority: 'Medium',
    tags: ['technical_support', 'integration', 'salesforce', 'setup']
  },
  {
    id: 'CALL-003',
    customer: 'Mike Chen',
    customerEmail: 'mike.chen@business.org',
    duration: '15:22',
    timestamp: '2024-01-14T16:45:00Z',
    transcript: `Customer: I wanted to thank you for the excellent service. The implementation went smoothly.
    Agent: That\'s wonderful to hear! I\'m glad everything worked out well.
    Customer: Your team was very professional and responsive throughout the entire process.
    Agent: I\'ll make sure to pass along your feedback to the team. Is there anything else I can help you with today?`,
    sentiment: 'Positive',
    sentimentScore: 0.85,
    intent: 'Positive Feedback',
    confidence: 97,
    summary: 'Customer expressing satisfaction with implementation service and team professionalism.',
    suggestedActions: [
      'Share feedback with implementation team',
      'Request case study or testimonial',
      'Consider for customer success story'
    ],
    priority: 'Low',
    tags: ['positive_feedback', 'implementation', 'testimonial', 'satisfaction']
  }
];

export const crossDomainInsights = [
  {
    id: 'INSIGHT-001',
    title: 'Churn Correlation with Onboarding Delays',
    type: 'correlation',
    confidence: 87,
    impact: 'high',
    domains: ['hr', 'support', 'finance'],
    description: 'Customer churn increased 15% correlating with HR onboarding delays and invoice processing issues.',
    findings: [
      'Invoice processing delays averaged 12 days vs 5 day target',
      'New hire onboarding completion dropped from 85% to 67%',
      'Customer sentiment scores decreased 18% in affected regions',
      'Correlation coefficient of 0.83 between delayed invoices and churn'
    ],
    recommendations: [
      'Expedite invoice processing workflow',
      'Implement automated onboarding checkpoints',
      'Create early warning system for at-risk accounts',
      'Cross-train staff to reduce dependency bottlenecks'
    ],
    timestamp: '2024-01-15T09:00:00Z'
  },
  {
    id: 'INSIGHT-002',
    title: 'Leadership ROI Optimization Window',
    type: 'predictive',
    confidence: 91,
    impact: 'medium',
    domains: ['hr', 'finance'],
    description: 'Candidates with 85%+ leadership scores hired in Q1 show 23% higher ROI by year-end.',
    findings: [
      'Q1 hires with high leadership scores outperform by 23%',
      'Budget efficiency peaks when 60% of hires are leadership-rated',
      'Cost-per-hire reduces 18% with predictive screening',
      'Employee retention improves 34% with better leadership matching'
    ],
    recommendations: [
      'Prioritize high-scoring candidates in Q1',
      'Adjust budget allocation for leadership assessment',
      'Implement predictive hiring dashboard',
      'Create leadership development fast-track programs'
    ],
    timestamp: '2024-01-14T14:30:00Z'
  }
];