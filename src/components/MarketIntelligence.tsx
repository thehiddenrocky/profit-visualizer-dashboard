import { ScrollArea } from "@/components/ui/scroll-area";
import { MarketIntelligenceCard } from "./MarketIntelligenceCard";

const marketData = [
  {
    title: "Strengthen Local Market Presence",
    summary: "Reinforce local brand perception and regional presence to retain customers",
    expectedGain: 8000,
    implementationCost: 1000,
    timeline: "2-4 weeks",
    costLevel: "Low" as const,
    department: "Marketing & Sales",
    evidence: [
      "Strong regional background of competitors",
      "Local trust as key differentiator",
      "Need to avoid competitive position deterioration"
    ],
    implementationSteps: [
      "Update marketing materials for local focus",
      "Launch targeted local campaigns",
      "Partner with local businesses"
    ],
    riskLevel: "Low",
    dataSources: [
      "Regional customer surveys",
      "Local competitor promotions",
      "Community forum analysis"
    ]
  },
  {
    title: "Develop Simple, Flexible Pricing",
    summary: "Introduce transparent pricing to retain price-sensitive customers",
    expectedGain: 10000,
    implementationCost: 1000,
    timeline: "1-2 weeks",
    costLevel: "Low" as const,
    department: "Pricing Strategy",
    evidence: [
      "Youth segment's price sensitivity",
      "MNP impact on customer retention",
      "Aggressive competitor pricing"
    ],
    implementationSteps: [
      "Update pricing system tiers",
      "Update website communication",
      "Train customer service team"
    ],
    riskLevel: "Low",
    dataSources: [
      "Price comparison sites",
      "Competitor pricing pages",
      "MNP statistics"
    ]
  },
  {
    title: "Broadband Bundles & Add-ons",
    summary: "Increase ARPU through bundled services and value-adds",
    expectedGain: 12000,
    implementationCost: 2000,
    timeline: "2-4 weeks",
    costLevel: "Mid" as const,
    department: "Product Development",
    evidence: [
      "Media companies entering market",
      "DigiTV opportunities identified",
      "IT firms market entry"
    ],
    implementationSteps: [
      "Identify compatible services",
      "Create bundle offerings",
      "Run pilot campaign"
    ],
    riskLevel: "Medium",
    dataSources: [
      "Partner service catalogs",
      "Customer surveys",
      "Bundle comparisons"
    ]
  },
  {
    title: "Strategic Media & IT Alliances",
    summary: "Partner with media/IT firms for end-to-end solutions",
    expectedGain: 15000,
    implementationCost: 3000,
    timeline: "4-6 weeks",
    costLevel: "High" as const,
    department: "Partnerships",
    evidence: [
      "IT companies market entry",
      "Need for integrated solutions",
      "Future trend indicators"
    ],
    implementationSteps: [
      "Identify key partners",
      "Negotiate partnership terms",
      "Train sales team"
    ],
    riskLevel: "Medium",
    dataSources: [
      "Competitor press releases",
      "Industry reports",
      "Customer feedback"
    ]
  },
  {
    title: "Quality Over Price Strategy",
    summary: "Differentiate through reliability and service quality",
    expectedGain: 7000,
    implementationCost: 1500,
    timeline: "2-3 weeks",
    costLevel: "Low" as const,
    department: "Customer Experience",
    evidence: [
      "Service commoditization trends",
      "Quality importance rising",
      "Trust in reliable service"
    ],
    implementationSteps: [
      "Highlight quality metrics",
      "Roll out quality guarantee",
      "Enhance support training"
    ],
    riskLevel: "Low",
    dataSources: [
      "Network performance logs",
      "Satisfaction surveys",
      "Industry benchmarks"
    ]
  },
  {
    title: "Match DNA Price Increase",
    summary: "Opportunity to raise fiber prices in Helsinki region",
    expectedGain: 6000,
    implementationCost: 500,
    timeline: "1 week",
    costLevel: "Low" as const,
    department: "Marketing",
    evidence: [
      "DNA raised prices by 5% (Source: DNA website)",
      "No negative social media sentiment",
      "Current prices 10% below market"
    ],
    implementationSteps: [
      "Update pricing system",
      "Prepare customer communications",
      "Brief customer service team"
    ],
    riskLevel: "Low",
    dataSources: [
      "Competitor websites",
      "Social media analysis",
      "Price comparison sites"
    ]
  },
  {
    title: "Bundle Security Services",
    summary: "New opportunity in enterprise segment",
    expectedGain: 8000,
    implementationCost: 2000,
    timeline: "2 weeks",
    costLevel: "Mid" as const,
    department: "Product Development",
    evidence: [
      "70% of enterprise customers request security",
      "Competitors charging premium for similar bundles",
      "In-house security expertise available"
    ],
    implementationSteps: [
      "Package existing security services",
      "Create enterprise bundle pricing",
      "Train sales team on new offerings"
    ],
    riskLevel: "Low",
    dataSources: [
      "Customer surveys",
      "Sales team feedback",
      "Market research reports"
    ]
  },
  {
    title: "5G Network Expansion",
    summary: "High demand in suburban areas",
    expectedGain: 15000,
    implementationCost: 50000,
    timeline: "3 months",
    costLevel: "High" as const,
    department: "Infrastructure",
    evidence: [
      "200% increase in data usage",
      "Competitor coverage gaps identified",
      "Strong customer demand signals"
    ],
    implementationSteps: [
      "Site surveys and planning",
      "Equipment procurement",
      "Installation and testing"
    ],
    riskLevel: "Medium",
    dataSources: [
      "Network usage data",
      "Coverage analysis",
      "Customer requests"
    ]
  }
];

export const MarketIntelligence = () => {
  const handleTalkToAlfred = () => {
    console.log("Opening Alfred chat...");
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-secondary mb-4">
        Market Intelligence
      </h2>
      <p className="text-gray-600 mb-6">
        Real-time opportunities based on market analysis
      </p>
      
      <ScrollArea className="w-full">
        <div className="flex gap-6 pb-4 overflow-x-auto">
          {marketData.map((data, index) => (
            <MarketIntelligenceCard
              key={index}
              {...data}
              onTalkToAlfred={handleTalkToAlfred}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
