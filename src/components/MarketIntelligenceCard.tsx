import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, MessageSquare, FileText } from 'lucide-react';
import { ChatInterface } from './chat/ChatInterface';

interface MarketIntelligenceCardProps {
  title: string;
  summary: string;
  expectedGain: number;
  implementationCost: number;
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
  department,
  evidence,
  implementationSteps,
  riskLevel,
  dataSources,
}: MarketIntelligenceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAlfred, setShowAlfred] = useState(false);

  const getDepartmentColor = (dept: string) => {
    return "bg-gray-100 text-gray-600";
  };

  const getInitialMessage = () => 
    `Hi! I noticed a quick win opportunity - ${title} could generate ${expectedGain} in additional monthly revenue. Would you like to know more?`;

  const getSuggestedQuestions = () => [
    `How do I implement ${title}?`,
    `What's the detailed ROI calculation for this action?`,
    `Can you break down the implementation steps?`,
    `What are the main risks to consider?`
  ];

  // Format summary to signal format
  const formatSignal = (text: string) => {
    const parts = text.split('•').map(part => part.trim());
    return parts.length > 1 ? parts : [text, 'Market Update'];
  };

  const [signalMetric, signalType] = formatSignal(summary);

  return (
    <>
      <Card className="w-full p-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <Badge className={getDepartmentColor(department)}>
              {department}
            </Badge>
            <span className="font-medium text-green-600 text-sm">
              €{(expectedGain/1000).toFixed(1)}K/mo ▲
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <span className="font-medium">{signalMetric} • {signalType}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="px-3 text-xs text-gray-400 uppercase tracking-wider font-medium">ACTIONS</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>
          <ol className="list-decimal list-inside text-sm text-gray-600 mt-2">
            {implementationSteps.map((step, index) => (
              <li key={index} className="mb-1">{step}</li>
            ))}
          </ol>
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

        <div className="mt-4 pt-4 border-t flex items-center justify-between">
          <button 
            onClick={() => setShowAlfred(true)}
            className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-xs">AI Assistant</span>
          </button>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span className="text-xs">Report</span>
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
