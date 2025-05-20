import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    text: 'Hello! How can I help you today?',
    isBot: true
  }]);
  const [input, setInput] = useState('');

  const isGreeting = (text: string): boolean => {
    const greetings = ['hi', 'hello', 'hey', 'hola', 'greetings'];
    return greetings.some(greeting => 
      text.toLowerCase().trim() === greeting
    );
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false
    };
    setMessages(prev => [...prev, userMessage]);

    // Check if it's just a greeting
    if (isGreeting(input)) {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Hi there! Please let me know your specific requirement or question, and I\'ll be happy to help you.',
        isBot: true
      };
      setMessages(prev => [...prev, botMessage]);
    } else {
      try {
        // Send message via email service for non-greeting messages
        const response = await apiRequest('POST', '/api/contact', {
          name: 'Chat User',
          email: 'chat@kubeace.com',
          message: input,
        });

        // Add bot response
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Thank you for your message. Our team will get back to you soon.',
          isBot: true
        };
        setMessages(prev => [...prev, botMessage]);
      } catch (error) {
        // Handle error
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Sorry, there was an error sending your message. Please try again later.',
          isBot: true
        };
        setMessages(prev => [...prev, errorMessage]);
      }
    }

    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-[350px] h-[500px] flex flex-col shadow-lg animate-in slide-in-from-bottom-5 duration-300">
          <div className="p-4 border-b flex justify-between items-center bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-t-lg">
            <h3 className="font-semibold">Chat with Us</h3>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-white/80"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${message.isBot
                    ? 'bg-gray-50'
                    : 'bg-gradient-to-r from-blue-900 to-indigo-900 text-white'}`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <Button 
                onClick={handleSend} 
                size="icon"
                className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white hover:opacity-90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      ) : (
        <div className="relative group">
          {/* Message Preview Bubble */}
          <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-lg p-4 w-64 transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
            <button onClick={() => setIsOpen(true)} className="w-full text-left">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#0084ff] flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Want to learn more?</p>
                  <p className="text-sm text-gray-500 mt-1">Click here to chat with us about how we can help your organization.</p>
                </div>
              </div>
            </button>
            <button 
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={(e) => {
                e.stopPropagation();
                // Add any close functionality if needed
              }}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Main chat bubble */}
          <div className="absolute -top-1 -right-1 w-[68px] h-[68px] rounded-full bg-[#0084ff] opacity-40 group-hover:scale-105 transition-all duration-300"></div>
          <Button
            size="icon"
            className="h-16 w-16 rounded-full shadow-lg bg-[#0084ff] hover:bg-[#0073e6] transition-all duration-300 relative z-10"
            onClick={() => setIsOpen(true)}
          >
            <div className="flex flex-col gap-1">
              <div className="w-8 h-1 bg-white rounded-full"></div>
              <div className="w-8 h-1 bg-white rounded-full"></div>
              <div className="w-8 h-1 bg-white rounded-full"></div>
            </div>
          </Button>

          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full z-20">
            <div className="absolute inset-0 h-4 w-4 bg-red-500 rounded-full animate-ping"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;