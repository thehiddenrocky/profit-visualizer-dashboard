import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { cn } from "@/lib/utils";
import { ChatInterface } from './chat/ChatInterface';

interface MarketIntelligenceCardProps {
  title: string;
  summary: string;
  expectedGain: number;
  implementationCost: number;
  timeline: string;
  costLevel: 'Low' | 'Mid' | 'High';
  department: string;
  evidence: string[];
  implementationSteps: string[];
  riskLevel: string;
  dataSources: string[];
  onTalkToAlfred: () => void;
}

export const MarketIntelligenceCard = ({
  title,
  summary,
  expectedGain,
  implementationCost,
  timeline,
  costLevel,
  department,
  evidence,
  implementationSteps,
  riskLevel,
  dataSources,
}: MarketIntelligenceCardProps) => {
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

  const getDepartmentColor = (dept: string) => {
    switch (dept.toLowerCase()) {
      case "marketing":
        return "bg-purple-100 text-purple-800";
      case "customer service":
        return "bg-blue-100 text-blue-800";
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
    `Hi! I noticed a quick win opportunity - ${title.toLowerCase()} could generate €${expectedGain} in additional monthly revenue. Would you like to know more?`;

  return (
    <>
      <Card 
        className={cn(
          "w-full transition-all duration-300",
          isExpanded ? "h-auto" : "h-[220px]"
        )}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        <div className="p-4">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-semibold text-sm text-secondary">{title}</h3>
            <Badge variant="outline" className={getCostColor(costLevel)}>
              {costLevel} Cost
            </Badge>
          </div>
          
          <p className="text-gray-600 text-xs line-clamp-2 mb-3">{summary}</p>
          
          <div className="flex justify-between items-center mb-3">
            <Badge className={getDepartmentColor(department)}>
              <span className="text-xs">{department}</span>
            </Badge>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="font-medium text-green-600">€{expectedGain}/month</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{timeline}</span>
            </div>
            <span>Cost: €{implementationCost}</span>
          </div>

          {isExpanded && (
            <div className="mt-4 animate-fade-in">
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2">Evidence:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                  {evidence.map((item, index) => (
                    <li key={index} className="mb-1">{item}</li>
                  ))}
                </ul>

                <h4 className="font-semibold mb-2">Implementation Steps:</h4>
                <ol className="list-decimal list-inside text-sm text-gray-600 mb-4">
                  {implementationSteps.map((step, index) => (
                    <li key={index} className="mb-1">{step}</li>
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
                      <li key={index} className="mb-1">{source}</li>
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
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
      </Card>
      {showAlfred && (
        <ChatInterface 
          initialMessage={getInitialMessage()}
          suggestedQuestions={getSuggestedQuestions()}
          isOpen={showAlfred}
          onClose={() => setShowAlfred(false)}
        />
      )}
    </>
  );
};