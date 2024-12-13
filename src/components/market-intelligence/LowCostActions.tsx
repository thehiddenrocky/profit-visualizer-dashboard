import { MarketIntelligenceCard } from "../MarketIntelligenceCard";
import { Badge } from "../ui/badge";
import { TrendingUp } from "lucide-react";
import { lowCostCardsData } from "@/data/lowCostCards";

export const LowCostActions = () => {
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
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {lowCostCardsData.map((data, index) => (
          <MarketIntelligenceCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};