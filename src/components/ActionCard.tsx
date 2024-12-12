import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { ChatInterface } from './chat/ChatInterface';

interface ActionCardProps {
  title: string;
  cost: "Low" | "Mid" | "High";
  reason: string;
  category: string;
  profitEstimate: string;
  timeline: string;
  evidence: string[];
  implementationSteps: string[];
  riskLevel: string;
  dataSources: string[];
}

export const ActionCard = ({
  title,
  cost,
  reason,
  category,
  profitEstimate,
  timeline,
  evidence,
  implementationSteps,
  riskLevel,
  dataSources,
}: ActionCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAlfred, setShowAlfred] = useState(false);

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

  const getSuggestedQuestions = () => [
    `How do I implement the ${title.toLowerCase()}?`,
    `What's the detailed ROI calculation for this action?`,
    `Can you break down the implementation steps?`,
    `What are the main risks to consider?`
  ];

  const getInitialMessage = () => 
    `Hi! I noticed a quick win opportunity - ${title.toLowerCase()} could generate ${profitEstimate} in additional monthly revenue. Would you like to know more?`;

  return (
    <>
      <Card 
        className={`p-6 hover:shadow-lg transition-shadow duration-200 ${isExpanded ? 'h-auto' : 'h-[200px]'}`}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
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
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-500">{timeline}</span>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 text-primary">
            <TrendingUp className="w-4 h-4" />
            <span className="font-medium">{profitEstimate}</span>
          </div>

          {isExpanded && (
            <div className="mt-4 animate-fade-in">
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2">Evidence:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                  {evidence.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h4 className="font-semibold mb-2">Implementation Steps:</h4>
                <ol className="list-decimal list-inside text-sm text-gray-600 mb-4">
                  {implementationSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm">
                    <strong>Risk Level:</strong> {riskLevel}
                  </span>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowAlfred(true);
                    }}
                    className="bg-primary hover:bg-primary-dark text-white"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Talk to Alfred
                  </Button>
                </div>

                <div className="text-sm text-gray-500">
                  <strong>Data Sources:</strong>
                  <ul className="list-disc list-inside mt-1">
                    {dataSources.map((source, index) => (
                      <li key={index}>{source}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="w-full flex justify-center items-center mt-4 text-gray-500 hover:text-gray-700"
          >
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>
      </Card>
      {showAlfred && (
        <ChatInterface 
          initialMessage={getInitialMessage()}
          suggestedQuestions={getSuggestedQuestions()}
          isOpen={showAlfred}
        />
      )}
    </>
  );
};