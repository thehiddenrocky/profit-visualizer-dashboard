import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CardHeaderProps {
  title: string;
  costLevel: 'Low' | 'Mid' | 'High';
  onShowMore: () => void;
  onTalkToAlfred: () => void;
}

export const CardHeader = ({ 
  title, 
  costLevel, 
  onShowMore,
  onTalkToAlfred 
}: CardHeaderProps) => {
  const getCostColor = (cost: string) => {
    switch (cost) {
      case "Low":
        return "bg-green-100 text-green-800";
      case "Mid":
        return "bg-yellow-100 text-yellow-800";
      case "High":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-start gap-2">
        <div>
          <h3 className="font-semibold text-sm text-secondary">{title}</h3>
        </div>
      </div>
    </div>
  );
};