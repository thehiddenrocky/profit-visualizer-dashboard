import { Bell, MessageSquare, TrendingUp, AlertCircle, ArrowRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatInterface } from './chat/ChatInterface';
import { useState } from 'react';

interface Notification {
  id: string;
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  timeAgo: string;
  status: 'new' | 'trending';
  action: {
    text: string;
    link: string;
  };
  icon: 'trend' | 'alert';
  profitEstimate?: string;
  chatContext?: {
    initialMessage: string;
    suggestedQuestions: string[];
  };
}

const notifications: Notification[] = [
  {
    id: '1',
    priority: 'high',
    title: 'DNA Price Change',
    description: 'Fiber prices up 5% in Helsinki region',
    timeAgo: '5 minutes ago',
    status: 'new',
    action: {
      text: 'View Opportunity',
      link: '#'
    },
    icon: 'trend',
    profitEstimate: '€8,000/month',
    chatContext: {
      initialMessage: "Hi! I noticed DNA has increased their fiber prices by 5% in the Helsinki region. This presents an opportunity to adjust our pricing strategy. Would you like to know more about the potential €8,000 monthly revenue increase?",
      suggestedQuestions: [
        "Why did DNA increase their prices?",
        "What's the customer sentiment about DNA's price change?",
        "How should we implement a similar price increase?",
        "What are the risks of following DNA's pricing?"
      ]
    }
  },
  {
    id: '2',
    priority: 'medium',
    title: 'Telia B2B Move',
    description: 'Launched new security bundle package',
    timeAgo: '2 hours ago',
    status: 'trending',
    action: {
      text: 'Analyze Impact',
      link: '#'
    },
    icon: 'alert',
    profitEstimate: '€12,000/month',
    chatContext: {
      initialMessage: "Hi! I noticed Telia has launched a new B2B security bundle package. This market move could impact our enterprise segment. We could potentially generate €12,000 in monthly revenue by developing a competitive offering. Would you like to know more?",
      suggestedQuestions: [
        "What's included in Telia's security bundle?",
        "How are enterprise customers responding?",
        "What security features do we currently offer?",
        "How long would it take to launch a similar package?"
      ]
    }
  },
  {
    id: '3',
    priority: 'low',
    title: 'Social Media Trend',
    description: 'Rising demand for smart home features',
    timeAgo: '12 hours ago',
    status: 'trending',
    action: {
      text: 'Explore Trend',
      link: '#'
    },
    icon: 'trend',
    profitEstimate: '€5,000/month'
  },
  {
    id: '4',
    priority: 'high',
    title: 'Network Expansion Opportunity',
    description: 'New residential area development in Espoo',
    timeAgo: '1 day ago',
    status: 'new',
    action: {
      text: 'View Opportunity',
      link: '#'
    },
    icon: 'trend',
    profitEstimate: '€15,000/month'
  },
  {
    id: '5',
    priority: 'medium',
    title: 'Customer Churn Alert',
    description: 'Slight increase in B2B segment',
    timeAgo: '1 day ago',
    status: 'new',
    action: {
      text: 'View Analysis',
      link: '#'
    },
    icon: 'alert',
    profitEstimate: '€7,000/month risk'
  },
  {
    id: '6',
    priority: 'low',
    title: 'Infrastructure Update',
    description: 'New fiber deployment technology available',
    timeAgo: '2 days ago',
    status: 'trending',
    action: {
      text: 'Review Tech',
      link: '#'
    },
    icon: 'trend',
    profitEstimate: '€10,000/month'
  },
  {
    id: '7',
    priority: 'high',
    title: 'Competitor Price Drop',
    description: 'Major competitor reduced prices by 10%',
    timeAgo: '2 days ago',
    status: 'new',
    action: {
      text: 'View Strategy',
      link: '#'
    },
    icon: 'alert',
    profitEstimate: '€20,000/month risk'
  },
  {
    id: '8',
    priority: 'medium',
    title: 'Government Initiative',
    description: 'New rural broadband funding announced',
    timeAgo: '3 days ago',
    status: 'trending',
    action: {
      text: 'Explore Opportunity',
      link: '#'
    },
    icon: 'trend',
    profitEstimate: '€25,000/month'
  },
  {
    id: '9',
    priority: 'low',
    title: 'Customer Satisfaction',
    description: 'NPS score improved by 15 points',
    timeAgo: '3 days ago',
    status: 'trending',
    action: {
      text: 'View Details',
      link: '#'
    },
    icon: 'trend',
    profitEstimate: '€4,000/month'
  },
  {
    id: '10',
    priority: 'high',
    title: 'Market Expansion',
    description: 'New business district development',
    timeAgo: '4 days ago',
    status: 'new',
    action: {
      text: 'View Opportunity',
      link: '#'
    },
    icon: 'trend',
    profitEstimate: '€30,000/month'
  }
];

export const NotificationPanel = () => {
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <Badge className="bg-red-100 text-red-800 text-xs">New</Badge>;
      case 'trending':
        return <Badge className="bg-yellow-100 text-yellow-800 text-xs">Trending</Badge>;
      default:
        return null;
    }
  };

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'trend':
        return <TrendingUp className="w-4 h-4" />;
      case 'alert':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <>
      <Card className="w-full shadow-lg">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-secondary" />
            <h2 className="font-semibold text-lg">Market Signals</h2>
          </div>
          <span className="text-xs text-gray-500">Last 4 days</span>
        </div>

        <ScrollArea className="h-[400px]">
          <div className="p-2">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        {getIcon(notification.icon)}
                        <h3 className="font-medium text-gray-900 text-sm">{notification.title}</h3>
                      </div>
                      {getStatusBadge(notification.status)}
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{notification.description}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">{notification.timeAgo}</span>
                      <button
                        onClick={() => setSelectedNotification(notification)}
                        className="text-primary hover:text-primary-dark flex items-center gap-1 group-hover:underline"
                      >
                        <MessageSquare className="w-3 h-3" />
                        AI Assistant
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>
      {selectedNotification && selectedNotification.chatContext && (
        <ChatInterface 
          initialMessage={selectedNotification.chatContext.initialMessage}
          suggestedQuestions={selectedNotification.chatContext.suggestedQuestions}
          isOpen={!!selectedNotification}
          onClose={() => setSelectedNotification(null)}
        />
      )}
    </>
  );
};
