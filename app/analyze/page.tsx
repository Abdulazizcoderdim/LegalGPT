import { AnalyzeDocument } from "@/components/analyze/analyze-document";

export default function AnalyzePage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Analyze Legal Documents
          </h1>
          <p className="text-lg text-muted-foreground">
            Upload or paste your legal document to get a clear, human-readable
            summary
          </p>
        </div>

        <AnalyzeDocument />
      </div>
    </div>
  );
}
