import { MarketIntelligenceCard } from "../MarketIntelligenceCard";
import { Badge } from "../ui/badge";
import { TrendingUp } from "lucide-react";

export const HighCostActions = () => {
  const highCostData = [
    {
      title: "Deploy Regional Fiber Network Expansion",
      summary: "Rapid population growth and new housing projects in several municipalities.",
      expectedGain: 75000,
      implementationCost: 400000,
      timeline: "12-18 months",
      costLevel: "High" as const,
      department: "Infrastructure",
      evidence: [
        "Urban development reports show growth",
        "Predicted increase in residential complexes",
        "Strong latent demand in forums"
      ],
      implementationSteps: [
        "Secure local permits",
        "Plan fiber line deployment",
        "Execute infrastructure work"
      ],
      riskLevel: "High",
      dataSources: [
        "Urban development reports",
        "Real estate news",
        "Local media coverage"
      ]
    },
    // ... Add all other high cost cards here
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Badge className="bg-red-600 text-white px-4 py-2 text-lg font-semibold">
          High Cost Implementation Actions
        </Badge>
        <TrendingUp className="w-5 h-5 text-green-600" />
        <span className="text-green-600 font-medium">
          Expected Monthly Profit Increase
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {highCostData.map((data, index) => (
          <MarketIntelligenceCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};