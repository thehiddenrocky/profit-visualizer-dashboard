import { Bell, TrendingUp, AlertCircle, ArrowRight } from 'lucide-react';
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
    profitEstimate: '€8,000/month'
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
    profitEstimate: '€12,000/month'
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

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

  const getInitialMessage = (notification: Notification) => 
    `Hi! I noticed a market signal - ${notification.title.toLowerCase()}. This could ${notification.profitEstimate?.includes('risk') ? 'impact' : 'generate'} ${notification.profitEstimate} in ${notification.profitEstimate?.includes('risk') ? 'potential losses' : 'additional revenue'}. Would you like to know more?`;

  const getSuggestedQuestions = (notification: Notification) => [
    `What's the detailed impact of ${notification.title.toLowerCase()}?`,
    `How can we respond to this market signal?`,
    `What are the main risks to consider?`,
    `Can you provide more market data about this?`
  ];

  return (
    <>
      <Card className="w-[320px] shadow-lg">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-primary" />
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
                  <div className={`w-2 h-2 rounded-full mt-2 ${getPriorityColor(notification.priority)}`} />
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
                        {notification.action.text}
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>
      {selectedNotification && (
        <ChatInterface 
          initialMessage={getInitialMessage(selectedNotification)}
          suggestedQuestions={getSuggestedQuestions(selectedNotification)}
          isOpen={!!selectedNotification}
          onClose={() => setSelectedNotification(null)}
        />
      )}
    </>
  );
};