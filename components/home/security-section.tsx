import { Shield, Lock, Trash2 } from "lucide-react";

export function SecuritySection() {
  return (
    <div className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your Privacy & Security Matter
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We take the security of your legal documents seriously
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Secure Processing</h3>
            <p className="text-muted-foreground">
              All document analysis happens in real-time through secure,
              encrypted connections
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">No Data Storage</h3>
            <p className="text-muted-foreground">
              Your documents are never stored on our servers. Analysis happens
              in your browser
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Trash2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Automatic Cleanup</h3>
            <p className="text-muted-foreground">
              All temporary data is immediately deleted after analysis is
              complete
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
