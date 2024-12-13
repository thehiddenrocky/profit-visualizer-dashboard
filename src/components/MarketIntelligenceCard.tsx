import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, Calendar, AlertTriangle, MessageSquare } from 'lucide-react';
import { ChatInterface } from './chat/ChatInterface';
import { EuroSignalBars } from './market-intelligence/EuroSignalBars';
import { CardHeader } from './market-intelligence/CardHeader';

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
  onTalkToAlfred?: () => void;
}

export const MarketIntelligenceCard = ({
  title,
  summary,
  expectedGain,
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

  const getInitialMessage = () => 
    `Hi! I noticed a quick win opportunity - ${title} could generate €${expectedGain} in additional monthly revenue. Would you like to know more?`;

  const getSuggestedQuestions = () => [
    `How do I implement ${title}?`,
    `What's the detailed ROI calculation for this action?`,
    `Can you break down the implementation steps?`,
    `What are the main risks to consider?`
  ];

  return (
    <>
      <Card className="w-full p-4">
        <div className="flex justify-between items-start mb-4">
          <CardHeader
            title={title}
            costLevel={costLevel}
            onShowMore={() => setIsExpanded(!isExpanded)}
            onTalkToAlfred={() => setShowAlfred(true)}
          />
          <EuroSignalBars amount={expectedGain} />
        </div>
        
        <p className="text-gray-600 text-xs line-clamp-2 mb-4">{summary}</p>
        
        <div className="flex justify-between items-center mb-4">
          <Badge className={getDepartmentColor(department)}>
            <span className="text-xs">{department}</span>
          </Badge>
        </div>

        <div className="flex items-center text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{timeline}</span>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-6 animate-fade-in border-t pt-4">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <h4 className="font-semibold">Evidence:</h4>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {evidence.map((item, index) => (
                    <li key={index} className="mb-1">{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <h4 className="font-semibold">Implementation Steps:</h4>
                </div>
                <ol className="list-decimal list-inside text-sm text-gray-600">
                  {implementationSteps.map((step, index) => (
                    <li key={index} className="mb-1">{step}</li>
                  ))}
                </ol>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-600" />
                  <h4 className="font-semibold">Risk Level:</h4>
                  <span className="text-sm">{riskLevel}</span>
                </div>
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

        <div className="mt-4 pt-4 border-t flex items-center">
          <button 
            onClick={() => setShowAlfred(true)}
            className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-xs">Talk to Alfred</span>
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