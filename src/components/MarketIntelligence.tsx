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
      <LowCostActions />
      <MediumCostActions />
      <HighCostActions />
    </div>
  );
};