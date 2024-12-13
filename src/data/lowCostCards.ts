export const lowCostCardsData = [
  // Priority cards first
  {
    title: "Responding to Competitor Price Increase",
    summary: "DNA's website shows they raised fiber prices by 5% in Helsinki. Current Lounea fiber packages remain ~10% cheaper than the local market average. No negative sentiment detected on social media regarding price increases.",
    expectedGain: 6000,
    implementationCost: 500,
    timeline: "1-2 weeks",
    costLevel: "Low" as const,
    department: "Pricing Strategy",
    evidence: [
      "DNA's website shows 5% price increase",
      "Lounea packages 10% below market average",
      "No negative social media sentiment"
    ],
    implementationSteps: [
      "Analyze current pricing structure",
      "Update regional pricing",
      "Communicate changes to customers"
    ],
    riskLevel: "Low",
    dataSources: [
      "DNA website",
      "Market price analysis",
      "Social media monitoring"
    ]
  },
  {
    title: "Positioning Against Long-Term Contracts of Competitors",
    summary: "Competitor contract terms (e.g., 5-year lock-ins) discussed negatively on social media. Lounea currently offers shorter commitments.",
    expectedGain: 4000,
    implementationCost: 500,
    timeline: "1 week",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "Negative social media discussions about long-term contracts",
      "Competitor contract analysis",
      "Current flexibility in Lounea's terms"
    ],
    implementationSteps: [
      "Create comparison graphics",
      "Update marketing materials",
      "Train sales team on highlighting this advantage"
    ],
    riskLevel: "Low",
    dataSources: [
      "Social media monitoring",
      "Competitor websites",
      "Customer feedback"
    ]
  },
  {
    title: "Showcasing Rapid Installation Times vs. Competitors",
    summary: "Reddit threads mention competitor installations taking weeks. Lounea's internal data suggests shorter setup periods.",
    expectedGain: 4000,
    implementationCost: 300,
    timeline: "1 week",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "Reddit discussion threads",
      "Internal installation metrics",
      "Competitor installation timeframes"
    ],
    implementationSteps: [
      "Gather installation time data",
      "Create comparative analysis",
      "Update website messaging"
    ],
    riskLevel: "Low",
    dataSources: [
      "Reddit forums",
      "Internal data",
      "Customer feedback"
    ]
  },
  {
    title: "Improving Organic Visibility with Competitor Keyword Gaps",
    summary: "SEO analysis shows competitor sites rank for 'fastest fiber in [CityName]' while Lounea's pages omit city-specific speed terms.",
    expectedGain: 4000,
    implementationCost: 800,
    timeline: "2 weeks",
    costLevel: "Low" as const,
    department: "SEO",
    evidence: [
      "SEO keyword analysis",
      "Competitor ranking data",
      "Local search trends"
    ],
    implementationSteps: [
      "Identify target cities",
      "Create localized content",
      "Implement SEO optimizations"
    ],
    riskLevel: "Low",
    dataSources: [
      "SEO tools",
      "Competitor analysis",
      "Search trends data"
    ]
  },
  {
    title: "Highlighting Reliability Over Competitors' Downtime",
    summary: "Public complaint forums show recent competitor outages with negative customer sentiment. Lounea's network performance reports less than 0.1% downtime last quarter.",
    expectedGain: 4000,
    implementationCost: 600,
    timeline: "1 week",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "Public complaint forums data",
      "Network performance reports",
      "Competitor downtime analysis"
    ],
    implementationSteps: [
      "Create uptime comparison",
      "Design reliability badges",
      "Update marketing materials"
    ],
    riskLevel: "Low",
    dataSources: [
      "Suomi24 forums",
      "Internal metrics",
      "Public feedback"
    ]
  },
  // Remaining cards
  {
    title: "Leveraging Fiber-Related SEO Keywords",
    summary: "External SEO tools show increasing search volume for 'affordable fiber internet Finland' and competitors ranking well. Lounea's pages don't include these keyphrases.",
    expectedGain: 7500,
    implementationCost: 1000,
    timeline: "2 weeks",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "SEMRush shows increasing search volume",
      "Competitors ranking well for target phrases",
      "Current pages missing key terms"
    ],
    implementationSteps: [
      "Conduct keyword research",
      "Update meta descriptions",
      "Create optimized content",
      "Monitor rankings"
    ],
    riskLevel: "Low",
    dataSources: [
      "SEMRush Analytics",
      "Competitor Analysis",
      "Current site audit"
    ]
  },
  {
    title: "Showcasing Price Stability",
    summary: "Competitor press releases reveal frequent tariff adjustments. No negative reaction to stable pricing strategies found in social sentiment.",
    expectedGain: 5000,
    implementationCost: 400,
    timeline: "1 week",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "Competitor press releases",
      "Social sentiment analysis",
      "Current pricing strategy effectiveness"
    ],
    implementationSteps: [
      "Create stability messaging",
      "Update pricing pages",
      "Train customer service"
    ],
    riskLevel: "Low",
    dataSources: [
      "Press releases",
      "Social media",
      "Internal data"
    ]
  },
  {
    title: "Using Public Speed Test Awards",
    summary: "Public speedtest rankings show Lounea's average speeds outperform competitors in multiple regions.",
    expectedGain: 3000,
    implementationCost: 500,
    timeline: "1 week",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "Ookla speedtest data",
      "Regional performance metrics",
      "Competitor speed comparisons"
    ],
    implementationSteps: [
      "Verify speed test results",
      "Create award badges",
      "Update website"
    ],
    riskLevel: "Low",
    dataSources: [
      "Ookla data",
      "Internal metrics",
      "Public rankings"
    ]
  },
  {
    title: "Aligning with Government Broadband Targets",
    summary: "Government documents indicate targets for minimum broadband speeds and coverage. Competitors do not visibly align marketing with these official goals.",
    expectedGain: 3000,
    implementationCost: 500,
    timeline: "2 weeks",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "Government broadband targets",
      "Competitor marketing analysis",
      "Current compliance status"
    ],
    implementationSteps: [
      "Review government goals",
      "Create alignment messaging",
      "Update service pages"
    ],
    riskLevel: "Low",
    dataSources: [
      "Government documents",
      "Competitor websites",
      "Internal compliance data"
    ]
  },
  {
    title: "Adding Visual Cost Comparison Chart",
    summary: "Aggregator sites show Lounea's pricing currently under typical market by ~10%. Competitors' rates are easily accessed.",
    expectedGain: 5000,
    implementationCost: 700,
    timeline: "2 weeks",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "Aggregator site data",
      "Competitor pricing analysis",
      "Market positioning research"
    ],
    implementationSteps: [
      "Gather pricing data",
      "Design comparison chart",
      "Implement on website"
    ],
    riskLevel: "Low",
    dataSources: [
      "Price aggregators",
      "Competitor websites",
      "Market research"
    ]
  },
  {
    title: "Promoting No Hidden Fees Policy",
    summary: "Forum complaints indicate hidden surcharges on competitor bills.",
    expectedGain: 4000,
    implementationCost: 300,
    timeline: "1 week",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "Forum complaints analysis",
      "Competitor billing practices",
      "Current transparency metrics"
    ],
    implementationSteps: [
      "Create transparency messaging",
      "Update pricing pages",
      "Train support team"
    ],
    riskLevel: "Low",
    dataSources: [
      "Customer forums",
      "Competitor analysis",
      "Internal billing data"
    ]
  },
  {
    title: "Leveraging Positive Industry Mentions",
    summary: "Industry news sites mention Lounea positively, while competitor mentions are neutral.",
    expectedGain: 3000,
    implementationCost: 400,
    timeline: "1 week",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "Industry news coverage",
      "Media sentiment analysis",
      "Competitor coverage comparison"
    ],
    implementationSteps: [
      "Collect media mentions",
      "Create testimonial section",
      "Update homepage"
    ],
    riskLevel: "Low",
    dataSources: [
      "Industry news sites",
      "Media monitoring",
      "Press coverage"
    ]
  },
  {
    title: "Differentiating on Customer Support Speed",
    summary: "Public complaints about competitor support response times appear on forums and social media. Lounea's internal metrics show faster response.",
    expectedGain: 5000,
    implementationCost: 600,
    timeline: "2 weeks",
    costLevel: "Low" as const,
    department: "Customer Service",
    evidence: [
      "Social media complaints",
      "Internal response metrics",
      "Competitor support analysis"
    ],
    implementationSteps: [
      "Verify response times",
      "Create KPI displays",
      "Update support page"
    ],
    riskLevel: "Low",
    dataSources: [
      "Social media",
      "Internal metrics",
      "Customer feedback"
    ]
  },
  {
    title: "Using Competitor Job Postings to Pre-Empt Their Moves",
    summary: "Competitors hiring IoT engineers suggest a future IoT offering. No immediate IoT marketing from Lounea yet.",
    expectedGain: 8000,
    implementationCost: 1000,
    timeline: "3 weeks",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "Competitor job postings",
      "IoT market analysis",
      "Current network capabilities"
    ],
    implementationSteps: [
      "Assess IoT readiness",
      "Create IoT messaging",
      "Update product descriptions"
    ],
    riskLevel: "Low",
    dataSources: [
      "Job boards",
      "Industry news",
      "Technical documentation"
    ]
  },
  {
    title: "Emphasizing No Throttling Policies",
    summary: "Social media hints competitor may throttle speeds during peak times. No official competitor denial found.",
    expectedGain: 4000,
    implementationCost: 300,
    timeline: "1 week",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "Social media discussions",
      "Competitor policy analysis",
      "Network performance data"
    ],
    implementationSteps: [
      "Document no-throttle policy",
      "Create messaging",
      "Update service features"
    ],
    riskLevel: "Low",
    dataSources: [
      "Social media",
      "Competitor policies",
      "Internal documentation"
    ]
  },
  {
    title: "Citing Public Rankings of Wi-Fi Hardware Compatibility",
    summary: "External tech reviews show certain routers as top-rated; competitor bundles average hardware.",
    expectedGain: 8000,
    implementationCost: 800,
    timeline: "2 weeks",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "Tech review sites",
      "Hardware compatibility tests",
      "Competitor hardware analysis"
    ],
    implementationSteps: [
      "Compile hardware rankings",
      "Create compatibility list",
      "Update product pages"
    ],
    riskLevel: "Low",
    dataSources: [
      "Tech reviews",
      "Testing results",
      "Hardware specifications"
    ]
  }
];