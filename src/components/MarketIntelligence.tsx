import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { MarketIntelligenceHeader } from "./market-intelligence/MarketIntelligenceHeader";
import { LowCostActions } from "./market-intelligence/LowCostActions";
import { MediumCostActions } from "./market-intelligence/MediumCostActions";
import { HighCostActions } from "./market-intelligence/HighCostActions";

export const MarketIntelligence = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-12">
      <MarketIntelligenceHeader />
      <div className="space-y-12">
        <div className="relative group">
          <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide">
            <LowCostActions />
          </div>
          
          {/* Right side gradient fade effect */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-24 
            bg-gradient-to-l from-gray-50 to-transparent 
            pointer-events-none"
          />
          
          {/* Netflix-style right arrow */}
          <button
            onClick={handleScrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 
            bg-gray-900/75 hover:bg-gray-900/90 
            p-1 rounded-full opacity-0 group-hover:opacity-100 
            transition-opacity duration-200 z-10"
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>
        </div>
        
        <div className="relative group">
          <div className="overflow-x-auto scrollbar-hide">
            <MediumCostActions />
          </div>
          {/* Right side gradient fade effect */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-24 
            bg-gradient-to-l from-gray-50 to-transparent 
            pointer-events-none"
          />
          {/* Netflix-style right arrow */}
          <button
            onClick={handleScrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 
            bg-gray-900/75 hover:bg-gray-900/90 
            p-1 rounded-full opacity-0 group-hover:opacity-100 
            transition-opacity duration-200 z-10"
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>
        </div>
        
        <div className="relative group">
          <div className="overflow-x-auto scrollbar-hide">
            <HighCostActions />
          </div>
          {/* Right side gradient fade effect */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-24 
            bg-gradient-to-l from-gray-50 to-transparent 
            pointer-events-none"
          />
          {/* Netflix-style right arrow */}
          <button
            onClick={handleScrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 
            bg-gray-900/75 hover:bg-gray-900/90 
            p-1 rounded-full opacity-0 group-hover:opacity-100 
            transition-opacity duration-200 z-10"
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};