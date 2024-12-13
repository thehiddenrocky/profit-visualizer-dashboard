import { MarketIntelligenceHeader } from "./market-intelligence/MarketIntelligenceHeader";
import { MarketIntelligenceGrid } from "./market-intelligence/MarketIntelligenceGrid";

const marketData = [
  {
    title: "Responding to Competitor Price Increase",
    summary: "DNA raised fiber prices by 5% in Helsinki. Opportunity to align pricing closer to market levels.",
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
    title: "Leveraging Fiber-Related SEO Keywords",
    summary: "Incorporate high-volume fiber internet keywords to boost organic traffic",
    expectedGain: 7500,
    implementationCost: 1000,
    timeline: "2-3 weeks",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "High search volume for target keywords",
      "Competitors ranking well for these terms",
      "Current pages missing key phrases"
    ],
    implementationSteps: [
      "Conduct keyword research",
      "Update website content",
      "Monitor rankings"
    ],
    riskLevel: "Low",
    dataSources: [
      "SEMRush data",
      "Competitor analysis",
      "Current website audit"
    ]
  },
  {
    title: "Highlighting Reliability Over Competitors' Downtime",
    summary: "Emphasize network reliability and uptime guarantees",
    expectedGain: 3000,
    implementationCost: 500,
    timeline: "1 week",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "Competitor outages reported on forums",
      "Less than 0.1% downtime last quarter",
      "Customer concerns about stability"
    ],
    implementationSteps: [
      "Create uptime guarantee badge",
      "Update marketing materials",
      "Train support team"
    ],
    riskLevel: "Low",
    dataSources: [
      "Network performance reports",
      "Public complaint forums",
      "Customer feedback"
    ]
  },
  {
    title: "Showcasing Price Stability Amid Competitor Price Fluctuations",
    summary: "Position Lounea as consistently stable and transparent to reassure customers.",
    expectedGain: 3500,
    implementationCost: 500,
    timeline: "1-2 weeks",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "Competitor press releases reveal frequent tariff adjustments",
      "No negative reaction to stable pricing strategies",
      "Customer interest in price stability"
    ],
    implementationSteps: [
      "Add note on pricing pages about stability",
      "Communicate with customers about pricing policies",
      "Monitor customer feedback"
    ],
    riskLevel: "Low",
    dataSources: [
      "Competitor press releases",
      "Customer feedback",
      "Market analysis"
    ]
  },
  {
    title: "Improving Organic Visibility with Competitor Keyword Gaps",
    summary: "Add city-targeted keywords to capture regionally searching prospects.",
    expectedGain: 3000,
    implementationCost: 500,
    timeline: "2 weeks",
    costLevel: "Low" as const,
    department: "SEO",
    evidence: [
      "Competitor sites rank for city-specific speed terms",
      "Lounea's pages omit these keywords",
      "Customer interest in local services"
    ],
    implementationSteps: [
      "Research city-specific keywords",
      "Update product pages with localized content",
      "Monitor search performance"
    ],
    riskLevel: "Low",
    dataSources: [
      "SEO analysis tools",
      "Competitor keyword research",
      "Customer surveys"
    ]
  },
  {
    title: "Positioning Against Long-Term Contracts of Competitors",
    summary: "Highlight contract flexibility to attract customers hesitant to commit long-term.",
    expectedGain: 3000,
    implementationCost: 500,
    timeline: "1-2 weeks",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "Competitor contract terms discussed negatively on social media",
      "Lounea offers shorter commitments",
      "Customer interest in flexible options"
    ],
    implementationSteps: [
      "Add comparison graphic showing Lounea's terms vs. competitors",
      "Update marketing materials",
      "Train sales team on messaging"
    ],
    riskLevel: "Low",
    dataSources: [
      "Social media analysis",
      "Competitor contract reviews",
      "Customer feedback"
    ]
  },
  {
    title: "Using Public Speed Test Awards to Stand Out",
    summary: "Showcase superior speed test results from independent sources.",
    expectedGain: 2250,
    implementationCost: 500,
    timeline: "1 week",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "Ookla speedtest rankings",
      "Outperforming competitors in regions",
      "Customer interest in verified speeds"
    ],
    implementationSteps: [
      "Collect speedtest data",
      "Create performance badges",
      "Update website"
    ],
    riskLevel: "Low",
    dataSources: [
      "Ookla data",
      "Regional speed tests",
      "Competitor comparisons"
    ]
  },
  {
    title: "Aligning with Government Broadband Targets",
    summary: "Highlight compliance with national broadband goals.",
    expectedGain: 2250,
    implementationCost: 500,
    timeline: "1-2 weeks",
    costLevel: "Low" as const,
    department: "Compliance",
    evidence: [
      "Government broadband targets",
      "Competitor gap in messaging",
      "Customer interest in standards"
    ],
    implementationSteps: [
      "Review compliance status",
      "Create messaging",
      "Update service pages"
    ],
    riskLevel: "Low",
    dataSources: [
      "Government documents",
      "Compliance reports",
      "Market analysis"
    ]
  },
  {
    title: "Adding a Visual 'Cost Comparison' Chart Using Public Price Data",
    summary: "Highlight current affordability and encourage sign-ups with a comparison chart.",
    expectedGain: 3500,
    implementationCost: 500,
    timeline: "1-2 weeks",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "Aggregator sites show Lounea's pricing under market",
      "Competitors' rates are easily accessed",
      "Customer interest in price transparency"
    ],
    implementationSteps: [
      "Create a market price comparison chart",
      "Publish on the website",
      "Promote through marketing channels"
    ],
    riskLevel: "Low",
    dataSources: [
      "Aggregator sites",
      "Market analysis",
      "Customer feedback"
    ]
  },
  {
    title: "Promoting Stability When Competitors Are Criticized for Hidden Fees",
    summary: "Stress 'No Hidden Fees' aligns with transparency desires noted in user discussions.",
    expectedGain: 3000,
    implementationCost: 500,
    timeline: "1 week",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "Forum complaints indicate hidden surcharges on competitor bills",
      "Customer interest in transparent pricing",
      "Positive feedback on clear pricing"
    ],
    implementationSteps: [
      "Add a prominent 'No Hidden Fees' statement",
      "Update marketing materials",
      "Monitor customer feedback"
    ],
    riskLevel: "Low",
    dataSources: [
      "Forum analysis",
      "Customer surveys",
      "Competitor reviews"
    ]
  },
  {
    title: "Showcasing Rapid Installation Times vs. Competitors",
    summary: "Highlight quicker setup to capture impatient customers.",
    expectedGain: 3000,
    implementationCost: 500,
    timeline: "1 week",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "Competitor installations taking weeks",
      "Lounea's internal data suggests shorter setup periods",
      "Customer interest in quick installations"
    ],
    implementationSteps: [
      "Add note on order pages about installation times",
      "Update marketing materials",
      "Train sales team on messaging"
    ],
    riskLevel: "Low",
    dataSources: [
      "Customer feedback",
      "Internal data",
      "Competitor analysis"
    ]
  },
  {
    title: "Leveraging Positive Industry Mentions",
    summary: "Feature positive mentions from industry news sites to enhance credibility.",
    expectedGain: 2000,
    implementationCost: 500,
    timeline: "1 week",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "Some industry news sites mention Lounea positively",
      "Competitor mentions are neutral",
      "Customer interest in credible sources"
    ],
    implementationSteps: [
      "Include media logos or quotes on the homepage",
      "Promote through marketing channels",
      "Monitor customer feedback"
    ],
    riskLevel: "Low",
    dataSources: [
      "Industry news sites",
      "Customer surveys",
      "Competitor analysis"
    ]
  },
  {
    title: "Differentiating on Customer Support Speed",
    summary: "Highlight faster response times to attract frustrated customers.",
    expectedGain: 3000,
    implementationCost: 500,
    timeline: "1 week",
    costLevel: "Low" as const,
    department: "Customer Service",
    evidence: [
      "Public complaints about competitor support response times",
      "Lounea's internal metrics show faster response",
      "Customer interest in responsive support"
    ],
    implementationSteps: [
      "Highlight support speed KPIs on the support contact page",
      "Update marketing materials",
      "Train support team on messaging"
    ],
    riskLevel: "Low",
    dataSources: [
      "Customer feedback",
      "Internal metrics",
      "Competitor analysis"
    ]
  },
  {
    title: "Using Competitor Job Postings to Pre-Empt Their Moves",
    summary: "Position Lounea as IoT-ready before competitor’s launch.",
    expectedGain: 5000,
    implementationCost: 500,
    timeline: "1-2 weeks",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "Competitors hiring IoT engineers suggest future offerings",
      "No immediate IoT marketing from Lounea yet",
      "Customer interest in IoT solutions"
    ],
    implementationSteps: [
      "Mention 'Future-Ready: Our network supports IoT devices' in product descriptions",
      "Update marketing materials",
      "Monitor customer feedback"
    ],
    riskLevel: "Low",
    dataSources: [
      "Competitor job postings",
      "Customer surveys",
      "Market analysis"
    ]
  },
  {
    title: "Emphasizing No Throttling Policies",
    summary: "Highlighting a 'No Throttle' policy resonates with customers reading these complaints.",
    expectedGain: 3000,
    implementationCost: 500,
    timeline: "1 week",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "Social media hints competitor may throttle speeds",
      "No official competitor denial found",
      "Customer interest in reliable speeds"
    ],
    implementationSteps: [
      "Add 'No bandwidth throttling' statement on plan features list",
      "Update marketing materials",
      "Monitor customer feedback"
    ],
    riskLevel: "Low",
    dataSources: [
      "Social media analysis",
      "Customer feedback",
      "Competitor reviews"
    ]
  },
  {
    title: "Citing Public Rankings of Wi-Fi Hardware Compatibility",
    summary: "Noting compatibility with top-reviewed devices can appeal to tech-savvy users.",
    expectedGain: 5000,
    implementationCost: 500,
    timeline: "1 week",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "External tech reviews show certain routers as top-rated",
      "Competitor bundles average hardware",
      "Customer interest in compatible devices"
    ],
    implementationSteps: [
      "State 'Tested with top-rated routers (per [Review Site])' on product pages",
      "Update marketing materials",
      "Monitor customer feedback"
    ],
    riskLevel: "Low",
    dataSources: [
      "Tech review sites",
      "Customer feedback",
      "Competitor analysis"
    ]
  }
];

export const MarketIntelligence = () => {
  const handleTalkToAlfred = () => {
    console.log("Opening Alfred chat...");
  };

  return (
    <div className="mb-12">
      <MarketIntelligenceHeader />
      <MarketIntelligenceGrid 
        marketData={marketData}
        onTalkToAlfred={handleTalkToAlfred}
      />
    </div>
  );
};
