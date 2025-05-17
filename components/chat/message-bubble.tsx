"use client";

import { User, Bot } from "lucide-react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
  isLoading?: boolean;
}

export function MessageBubble({
  message,
  isLoading = false,
}: MessageBubbleProps) {
  const isUser = message.sender === "user";

  return (
    <div
      className={cn(
        "flex gap-3 max-w-full",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {!isUser && (
        <div className="flex-shrink-0 mt-1">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Bot className="h-4 w-4 text-primary" />
          </div>
        </div>
      )}

      <div
        className={cn(
          "rounded-lg py-2 px-3 max-w-[85%]",
          isUser ? "bg-primary text-primary-foreground" : "bg-muted"
        )}
      >
        {isLoading ? (
          <div className="flex items-center h-6">
            <Loader2 className="h-4 w-4 animate-spin" />
          </div>
        ) : (
          <div className="space-y-1">
            <div className="text-sm whitespace-pre-wrap">{message.content}</div>
            <div className="text-xs opacity-70">
              {format(message.timestamp, "h:mm a")}
            </div>
          </div>
        )}
      </div>

      {isUser && (
        <div className="flex-shrink-0 mt-1">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-4 w-4 text-primary" />
          </div>
        </div>
      )}
    </div>
  );
}
