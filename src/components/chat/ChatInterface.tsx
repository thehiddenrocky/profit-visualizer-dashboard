import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Message {
  content: string;
  isUser: boolean;
}

interface ChatInterfaceProps {
  initialMessage?: string;
  suggestedQuestions?: string[];
  isOpen?: boolean;
  onClose?: () => void;
}

export const ChatInterface = ({ 
  initialMessage = "Hi! I noticed a quick win opportunity - improving your SEO rankings by including fiber optic related keywords on your homepage could generate €5,000-€10,000 in additional monthly revenue. Would you like to know more?",
  suggestedQuestions = [
    "How do I implement these SEO improvements?",
    "What ROI can I expect from SEO changes?",
    "Are there other quick wins?",
    "What's the timeline for SEO results?"
  ],
  isOpen: initialIsOpen = false,
  onClose
}: ChatInterfaceProps) => {
  const [isVisible, setIsVisible] = useState(initialIsOpen);
  const [messages, setMessages] = useState<Message[]>([
    { content: initialMessage, isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  // Reset messages and keep chat open when initialMessage changes
  useEffect(() => {
    if (initialMessage) {
      setMessages([{ content: initialMessage, isUser: false }]);
      setIsVisible(true); // Keep chat open when new message arrives
    }
  }, [initialMessage]);

  // Handle initial open state
  useEffect(() => {
    if (!initialIsOpen) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [initialIsOpen]);

  // Sync with parent's isOpen prop
  useEffect(() => {
    setIsVisible(initialIsOpen);
  }, [initialIsOpen]);

  const handleSend = (content: string) => {
    if (!content.trim()) return;
    
    setMessages(prev => [...prev, { content, isUser: true }]);
    setInputValue('');
    
    // Simulate AI response based on context
    setTimeout(() => {
      let response = "I'll help you understand that better. Based on our analysis...";
      
      if (content.toLowerCase().includes('implement')) {
        response = "To implement these improvements, start by following the implementation steps I outlined. Would you like me to break down each step in more detail?";
      } else if (content.toLowerCase().includes('roi')) {
        response = "Based on our analysis and the evidence provided, implementing these changes could bring significant returns. Would you like to see the detailed calculations?";
      } else if (content.toLowerCase().includes('timeline')) {
        response = "The implementation timeline varies by step. Let me break down the timeline for each phase...";
      }
      
      setMessages(prev => [...prev, {
        content: response,
        isUser: false
      }]);
    }, 1000);
  };

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isVisible ? (
        <Button
          onClick={() => setIsVisible(true)}
          className="group flex items-center gap-2 bg-primary hover:bg-primary-dark text-white rounded-full px-4 py-2 shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <MessageSquare className="h-5 w-5" />
          <span className="hidden group-hover:inline">Chat with Alfred</span>
        </Button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-[380px] h-[500px] flex flex-col border border-gray-200 animate-fade-in">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-primary text-white rounded-t-lg">
            <h3 className="font-semibold">Alfred - Profitability Advisor</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="hover:bg-primary-dark text-white"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex",
                  message.isUser ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] rounded-lg p-3",
                    message.isUser
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-800"
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          {messages.length === 1 && (
            <div className="p-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">Suggested questions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSend(question)}
                    className="text-sm bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-gray-700 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend(inputValue)}
                placeholder="Type your question..."
                className="flex-1"
              />
              <Button
                onClick={() => handleSend(inputValue)}
                className="bg-primary hover:bg-primary-dark text-white"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
