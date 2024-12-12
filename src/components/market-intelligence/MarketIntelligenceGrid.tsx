import { MarketIntelligenceCard } from "../MarketIntelligenceCard";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MarketIntelligenceGridProps {
  marketData: any[];
  onTalkToAlfred: () => void;
}

export const MarketIntelligenceGrid = ({ marketData, onTalkToAlfred }: MarketIntelligenceGridProps) => {
  return (
    <ScrollArea className="h-[calc(100vh-200px)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
        {marketData.map((data, index) => (
          <MarketIntelligenceCard
            key={index}
            {...data}
            title={data.title + (index < 5 ? " ***" : "")}
            onTalkToAlfred={onTalkToAlfred}
          />
        ))}
      </div>
    </ScrollArea>
  );
};