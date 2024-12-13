import { MarketIntelligenceCard } from "../MarketIntelligenceCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

interface MarketIntelligenceGridProps {
  marketData: any[];
  onTalkToAlfred: () => void;
}

export const MarketIntelligenceGrid = ({ marketData, onTalkToAlfred }: MarketIntelligenceGridProps) => {
  // Priority cards that should appear at the top
  const priorityCardTitles = [
    "Responding to Competitor Price Increase",
    "Positioning Against Long-Term Contracts of Competitors",
    "Showcasing Rapid Installation Times vs. Competitors",
    "Improving Organic Visibility with Competitor Keyword Gaps",
    "Highlighting Reliability Over Competitors' Downtime"
  ];

  // Segment data by cost level
  const lowCostActions = marketData.filter(data => data.costLevel === "Low");
  const mediumCostActions = marketData.filter(data => data.costLevel === "Mid");
  const highCostActions = marketData.filter(data => data.costLevel === "High");

  const renderSegment = (title: string, actions: any[], bgColor: string) => (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Badge className={`${bgColor} text-white px-4 py-2 text-lg font-semibold`}>
          {title}
        </Badge>
        <TrendingUp className="w-5 h-5 text-green-600" />
        <span className="text-green-600 font-medium">
          Expected Monthly Profit Increase
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {actions.map((data, index) => (
          <MarketIntelligenceCard
            key={index}
            {...data}
            title={priorityCardTitles.includes(data.title) ? `${data.title} ***` : data.title}
            onTalkToAlfred={onTalkToAlfred}
          />
        ))}
      </div>
    </div>
  );

  return (
    <ScrollArea className="h-[calc(100vh-200px)]">
      <div className="space-y-8 pb-6 px-4">
        {renderSegment("Low Cost Implementation Actions", lowCostActions, "bg-green-600")}
        {renderSegment("Medium Cost Implementation Actions", mediumCostActions, "bg-yellow-600")}
        {renderSegment("High Cost Implementation Actions", highCostActions, "bg-red-600")}
      </div>
    </ScrollArea>
  );
};