import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Message {
  content: string;
  isUser: boolean;
}

const suggestedQuestions = [
  "How can I implement low-cost actions first?",
  "Which actions have the highest ROI?",
  "What are the marketing-focused initiatives?",
  "How long until I see results?"
];

export const ChatInterface = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { content: "Hello! I'm Alfred, your profitability advisor. How can I help you today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (content: string) => {
    if (!content.trim()) return;
    
    setMessages(prev => [...prev, { content, isUser: true }]);
    setInputValue('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        content: "I'll help you understand that better. Based on our analysis...",
        isUser: false
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 bg-primary hover:bg-primary-dark text-white rounded-full px-4 py-2 shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <MessageSquare className="h-5 w-5" />
          <span className="hidden group-hover:inline">Chat with Alfred</span>
        </Button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-[380px] h-[500px] flex flex-col border border-gray-200">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-primary text-white rounded-t-lg">
            <h3 className="font-semibold">Alfred - Profitability Advisor</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
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