import { MarketIntelligenceCard } from "../MarketIntelligenceCard";
import { Badge } from "../ui/badge";
import { TrendingUp } from "lucide-react";

export const MediumCostActions = () => {
  const mediumCostData = [
    {
      title: "Create Localized City Pages for SEO",
      summary: "Google Trends shows 15% increase in '[CityName] fiber internet' searches.",
      expectedGain: 6000,
      implementationCost: 2500,
      timeline: "4 weeks",
      costLevel: "Mid" as const,
      department: "SEO",
      evidence: [
        "Increased local search volume",
        "Competitor success with city pages",
        "Forum discussions showing local intent"
      ],
      implementationSteps: [
        "Research city-specific keywords",
        "Create localized landing pages",
        "Add local testimonials and maps"
      ],
      riskLevel: "Low",
      dataSources: [
        "Google Trends",
        "Competitor analysis",
        "Forum discussions"
      ]
    },
    // ... Add all other medium cost cards here
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Badge className="bg-yellow-600 text-white px-4 py-2 text-lg font-semibold">
          Medium Cost Implementation Actions
        </Badge>
        <TrendingUp className="w-5 h-5 text-green-600" />
        <span className="text-green-600 font-medium">
          Expected Monthly Profit Increase
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {mediumCostData.map((data, index) => (
          <MarketIntelligenceCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};