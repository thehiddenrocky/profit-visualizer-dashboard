import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface ActionCardProps {
  title: string;
  cost: "Low" | "Mid" | "High";
  reason: string;
  category: string;
  profitEstimate: string;
}

export const ActionCard = ({
  title,
  cost,
  reason,
  category,
  profitEstimate,
}: ActionCardProps) => {
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

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "marketing":
        return "bg-purple-100 text-purple-800";
      case "customer service":
        return "bg-blue-100 text-blue-800";
      case "seo":
      case "seo optimization":
        return "bg-indigo-100 text-indigo-800";
      case "product development":
        return "bg-pink-100 text-pink-800";
      case "infrastructure":
        return "bg-orange-100 text-orange-800";
      case "financial strategy":
        return "bg-emerald-100 text-emerald-800";
      case "data collection":
        return "bg-cyan-100 text-cyan-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg text-secondary">{title}</h3>
          <Badge variant="outline" className={getCostColor(cost)}>
            {cost} Cost
          </Badge>
        </div>
        <p className="text-gray-600 text-sm">{reason}</p>
        <div className="flex justify-between items-center mt-2">
          <Badge className={getCategoryColor(category)}>{category}</Badge>
          <span className="font-medium text-primary">{profitEstimate}</span>
        </div>
      </div>
    </Card>
  );
};