import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MarketIntelligenceHeader } from "./market-intelligence/MarketIntelligenceHeader";
import { LowCostActions } from "./market-intelligence/LowCostActions";
import { MediumCostActions } from "./market-intelligence/MediumCostActions";
import { HighCostActions } from "./market-intelligence/HighCostActions";

export const MarketIntelligence = () => {
  return (
    <div className="mb-12">
      <MarketIntelligenceHeader />
      <div className="space-y-12">
        <div className="relative">
          <LowCostActions />
          {/* Right side gradient fade effect */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-24 
            bg-gradient-to-l from-gray-50 to-transparent 
            pointer-events-none"
          />
        </div>
        
        <div className="relative">
          <MediumCostActions />
          {/* Right side gradient fade effect */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-24 
            bg-gradient-to-l from-gray-50 to-transparent 
            pointer-events-none"
          />
        </div>
        
        <div className="relative">
          <HighCostActions />
          {/* Right side gradient fade effect */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-24 
            bg-gradient-to-l from-gray-50 to-transparent 
            pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};