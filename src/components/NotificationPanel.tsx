import { Bell, TrendingUp, AlertCircle, ArrowRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    icon: 'trend'
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
    icon: 'alert'
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
    icon: 'trend'
  }
];

export const NotificationPanel = () => {
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
        return <Badge className="bg-red-100 text-red-800">New</Badge>;
      case 'trending':
        return <Badge className="bg-yellow-100 text-yellow-800">Trending</Badge>;
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
    <Card className="w-[320px] shadow-lg">
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-primary" />
          <h2 className="font-semibold text-lg">Market Signals</h2>
        </div>
        <span className="text-sm text-gray-500">Last 24 hours</span>
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
                      <h3 className="font-medium text-gray-900">{notification.title}</h3>
                    </div>
                    {getStatusBadge(notification.status)}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{notification.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{notification.timeAgo}</span>
                    <a
                      href={notification.action.link}
                      className="text-primary hover:text-primary-dark flex items-center gap-1 group-hover:underline"
                    >
                      {notification.action.text}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};