"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, User, Bot, FileText } from "lucide-react";
import { MessageBubble } from "@/components/chat/message-bubble";
import { DocumentSidebar } from "@/components/chat/document-sidebar";

// Mock data
const mockDocumentSummary = {
  title: "Employment Agreement",
  summary:
    "This is a standard employment agreement that outlines the terms of employment between the employer and employee. It includes provisions for compensation, benefits, termination, and confidentiality.",
};

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm your legal assistant. Ask me any questions about your employment agreement.",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "The non-compete clause in section 8 restricts you from working with competitors for 2 years after employment. This is longer than typical in the industry, which is usually 6-12 months.",
        "Based on the document, all intellectual property created during your employment belongs to the company, regardless of whether it was created during work hours or not.",
        "According to section 3, your compensation includes a base salary plus benefits such as health insurance, retirement plans, and vacation time.",
        "The agreement states that the company can terminate your employment with only 1 week notice during the first year, which is shorter than the standard 2-4 weeks notice period.",
      ];

      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];

      const newBotMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, newBotMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex gap-6 relative">
      {showSidebar && (
        <div className="hidden md:block w-1/3">
          <DocumentSidebar document={mockDocumentSummary} />
        </div>
      )}

      <Card className="flex-1 flex flex-col h-[calc(100vh-220px)] min-h-[500px]">
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center space-x-2">
            <Bot className="h-5 w-5 text-primary" />
            <h2 className="font-semibold">Legal Assistant</h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <FileText className="h-4 w-4" />
            <span className="sr-only">Toggle document</span>
          </Button>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message}
                isLoading={false}
              />
            ))}
            {isLoading && (
              <MessageBubble
                message={{
                  id: "loading",
                  content: "",
                  sender: "bot",
                  timestamp: new Date(),
                }}
                isLoading={true}
              />
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              placeholder="Ask a question about your document..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              size="icon"
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
