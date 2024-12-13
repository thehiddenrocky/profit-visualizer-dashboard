import { MarketIntelligenceCard } from "../MarketIntelligenceCard";
import { Badge } from "../ui/badge";
import { TrendingUp } from "lucide-react";

export const HighCostActions = () => {
  const highCostData = [
    {
      title: "Deploy Regional Fiber Network Expansion",
      summary: "Population growth in new housing areas - infrastructure expansion opportunity",
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
    {
      title: "Expand Fiber Network to Underserved Areas",
      summary: "Identified underserved regions with high demand - market penetration opportunity",
      expectedGain: 50000,
      implementationCost: 300000,
      timeline: "6-12 months",
      costLevel: "High" as const,
      department: "Infrastructure",
      evidence: [
        "Market analysis indicates demand",
        "Community feedback supports expansion",
        "Competitor presence is minimal"
      ],
      implementationSteps: [
        "Conduct feasibility studies",
        "Engage with local stakeholders",
        "Develop marketing strategy"
      ],
      riskLevel: "Medium",
      dataSources: [
        "Market research reports",
        "Community surveys",
        "Competitor analysis"
      ]
    },
    {
      title: "Upgrade Existing Fiber Infrastructure",
      summary: "Aging infrastructure identified - opportunity to enhance service quality",
      expectedGain: 60000,
      implementationCost: 250000,
      timeline: "8-10 months",
      costLevel: "High" as const,
      department: "Infrastructure",
      evidence: [
        "Customer complaints about service",
        "Performance metrics indicate need for upgrades",
        "Competitor upgrades are underway"
      ],
      implementationSteps: [
        "Assess current infrastructure",
        "Plan upgrade phases",
        "Communicate with customers"
      ],
      riskLevel: "Medium",
      dataSources: [
        "Customer feedback",
        "Performance analytics",
        "Industry benchmarks"
      ]
    },
    {
      title: "Launch 5G Fiber Services",
      summary: "Emerging demand for 5G services - capitalize on technological advancements",
      expectedGain: 80000,
      implementationCost: 500000,
      timeline: "12-24 months",
      costLevel: "High" as const,
      department: "R&D",
      evidence: [
        "Market trends show increasing 5G adoption",
        "Competitors are launching similar services",
        "Consumer interest in faster internet"
      ],
      implementationSteps: [
        "Research technology requirements",
        "Develop service offerings",
        "Market launch strategy"
      ],
      riskLevel: "High",
      dataSources: [
        "Industry reports",
        "Consumer surveys",
        "Competitor analysis"
      ]
    },
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
