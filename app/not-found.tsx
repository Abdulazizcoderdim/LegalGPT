import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      <div className="flex flex-col items-center text-center max-w-md">
        <div className="bg-primary/10 rounded-full p-4 mb-6">
          <FileQuestion className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Page Not Found
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Sorry, we couldn't find the page you're looking for. It might have
          been moved or deleted.
        </p>
        <Button asChild size="lg" className="rounded-full px-8">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
