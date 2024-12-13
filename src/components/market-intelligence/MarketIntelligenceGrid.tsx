import { useRef } from "react";
import { MarketIntelligenceCard } from "../MarketIntelligenceCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";

interface MarketIntelligenceGridProps {
  marketData: any[];
  onTalkToAlfred: () => void;
}

export const MarketIntelligenceGrid = ({ marketData, onTalkToAlfred }: MarketIntelligenceGridProps) => {
  // Segment data by cost level
  const lowCostActions = marketData.filter(data => data.costLevel === "Low");
  const mediumCostActions = marketData.filter(data => data.costLevel === "Mid");
  const highCostActions = marketData.filter(data => data.costLevel === "High");

  const containerRef = useRef<HTMLDivElement>(null);

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
      <div className="relative group">
        <div 
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        >
          {actions.map((data, index) => (
            <div key={index} className="flex-none w-[350px]">
              <MarketIntelligenceCard
                {...data}
                onTalkToAlfred={onTalkToAlfred}
              />
            </div>
          ))}
        </div>
        
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