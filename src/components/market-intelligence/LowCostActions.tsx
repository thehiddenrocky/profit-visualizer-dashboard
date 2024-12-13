import { MarketIntelligenceCard } from "../MarketIntelligenceCard";
import { Badge } from "../ui/badge";
import { TrendingUp } from "lucide-react";

export const LowCostActions = () => {
  const lowCostData = [
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
    // ... Add all other low cost cards here
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Badge className="bg-green-600 text-white px-4 py-2 text-lg font-semibold">
          Low Cost Implementation Actions
        </Badge>
        <TrendingUp className="w-5 h-5 text-green-600" />
        <span className="text-green-600 font-medium">
          Expected Monthly Profit Increase
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {lowCostData.map((data, index) => (
          <MarketIntelligenceCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};