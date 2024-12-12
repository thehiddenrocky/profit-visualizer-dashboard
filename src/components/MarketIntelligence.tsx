import { ScrollArea } from "@/components/ui/scroll-area";
import { MarketIntelligenceCard } from "./MarketIntelligenceCard";

const marketData = [
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
    // This will be handled by the chat interface
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