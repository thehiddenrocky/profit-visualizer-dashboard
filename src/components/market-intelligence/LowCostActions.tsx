import { MarketIntelligenceCard } from "../MarketIntelligenceCard";
import { Badge } from "../ui/badge";
import { TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { lowCostCardsData } from "@/data/lowCostCards";
import { useRef } from "react";

export const LowCostActions = () => {
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
      
      <div className="relative group">
        <div 
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        >
          {lowCostCardsData.map((data, index) => (
            <div key={index} className="flex-none w-[350px]">
              <MarketIntelligenceCard {...data} />
            </div>
          ))}
        </div>

        {lowCostCardsData.length > 3 && (
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