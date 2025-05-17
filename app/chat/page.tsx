import { ChatInterface } from "@/components/chat/chat-interface";

export default function ChatPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ask Questions About Your Document
          </h1>
          <p className="text-lg text-muted-foreground">
            Chat with our AI to get clarification on any part of your legal
            document
          </p>
        </div>

        <ChatInterface />
      </div>
    </div>
  );
}
