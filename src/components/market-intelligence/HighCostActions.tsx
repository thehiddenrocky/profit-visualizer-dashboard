import { MarketIntelligenceCard } from "../MarketIntelligenceCard";
import { Badge } from "../ui/badge";
import { TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export const HighCostActions = () => {
  const containerRef = useRef<HTMLDivElement>(null);
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

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

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
      
      <div className="relative group">
        <div 
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        >
          {highCostData.map((data, index) => (
            <div key={index} className="flex-none w-[350px]">
              <MarketIntelligenceCard {...data} />
            </div>
          ))}
        </div>

        {highCostData.length > 3 && (
          <>
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 p-4 rounded-r-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 h-[calc(100%-2rem)]"
              onClick={handleScrollLeft}
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 p-4 rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 h-[calc(100%-2rem)]"
              onClick={handleScrollRight}
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};