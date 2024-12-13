import { MarketIntelligenceCard } from "../MarketIntelligenceCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

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

  // Sort data to put priority cards first
  const sortedData = [...marketData].sort((a, b) => {
    const aIndex = priorityCardTitles.indexOf(a.title);
    const bIndex = priorityCardTitles.indexOf(b.title);
    if (aIndex === -1 && bIndex === -1) return 0;
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });

  // Segment data by cost level
  const lowCostActions = sortedData.filter(data => data.costLevel === "Low");
  const mediumCostActions = sortedData.filter(data => data.costLevel === "Mid");
  const highCostActions = sortedData.filter(data => data.costLevel === "High");

  const renderSegment = (title: string, actions: any[], bgColor: string) => (
    <div className="mb-8">
      <Badge className={`mb-4 ${bgColor} text-white px-4 py-2`}>
        {title}
      </Badge>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        {renderSegment("Low Cost Actions", lowCostActions, "bg-green-600")}
        {renderSegment("Medium Cost Actions", mediumCostActions, "bg-yellow-600")}
        {renderSegment("High Cost Actions", highCostActions, "bg-red-600")}
      </div>
    </ScrollArea>
  );
};