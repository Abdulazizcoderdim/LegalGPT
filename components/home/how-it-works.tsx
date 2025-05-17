import { Upload, FileSearch, MessageSquare } from "lucide-react";

export function HowItWorks() {
  return (
    <div className="py-24 bg-muted/50" id="how-it-works">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three simple steps to understand any legal document
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl p-8 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md">
            <div className="bg-primary/10 rounded-full p-4 mb-6">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Upload or Paste</h3>
            <p className="text-muted-foreground">
              Upload a PDF or paste the legal text you want to understand. We
              support contracts, agreements, terms of service, and more.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md">
            <div className="bg-primary/10 rounded-full p-4 mb-6">
              <FileSearch className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
            <p className="text-muted-foreground">
              Our AI analyzes the document, identifies key clauses, and provides
              a clear, concise summary in plain English.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md">
            <div className="bg-primary/10 rounded-full p-4 mb-6">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Ask Questions</h3>
            <p className="text-muted-foreground">
              Interact with our AI chatbot to ask specific questions about the
              document and get detailed explanations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
