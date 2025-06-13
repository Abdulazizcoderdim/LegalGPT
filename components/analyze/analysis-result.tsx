"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  CheckCircle,
  Copy,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { toast } from "sonner";
import { HighlightItem } from "@/types";
import { translateWithLibre } from "@/lib/translateWithLibre";

interface AnalysisResultProps {
  result: {
    summary: string;
    highlights: HighlightItem[];
    originalText: string;
  };
}

export function AnalysisResult({ result }: AnalysisResultProps) {
  const [isOriginalExpanded, setIsOriginalExpanded] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("Copied to clipboard!");
  };

  useEffect(() => {
    const translate = async () => {
      if (result?.summary) {
        const summaryUz = await translateWithLibre(result.summary);
        result.summary = summaryUz;
      }
    };

    translate();
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "destructive";
      case "medium":
        return "default";
      case "warning":
        return "secondary";
      default:
        return "secondary";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high":
        return <AlertCircle className="h-4 w-4" />;
      case "medium":
        return <AlertTriangle className="h-4 w-4" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <CheckCircle className="h-4 w-4" />;
    }
  };

  return (
    <Tabs defaultValue="summary" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-6">
        <TabsTrigger value="summary">Summary</TabsTrigger>
        <TabsTrigger value="highlights">Key Highlights</TabsTrigger>
        <TabsTrigger value="original">Original Text</TabsTrigger>
      </TabsList>

      <TabsContent value="summary">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Document Summary
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopy(result.summary)}
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            </CardTitle>
            <CardDescription>
              AI-generated summary of the key points in your document
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-base leading-7 whitespace-pre-line">
              {result.summary}
            </div>

            <div className="mt-6 flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Have questions about this document?
              </span>
              <Button asChild>
                <Link href="/chat">
                  Ask Questions
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="highlights">
        <Card>
          <CardHeader>
            <CardTitle>Key Highlights</CardTitle>
            <CardDescription>
              Important clauses and potential issues that deserve attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {result.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 transition-colors hover:bg-muted/30"
                >
                  <div className="flex items-start gap-2">
                    <Badge
                      variant={getSeverityColor(highlight.severity)}
                      className="flex items-center gap-1 py-1 px-2"
                    >
                      {getSeverityIcon(highlight.severity)}
                      <span className="capitalize">{highlight.severity}</span>
                    </Badge>
                    <div className="flex-1">
                      <h3 className="font-semibold text-base">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="original">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Original Document
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopy(result.originalText)}
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            </CardTitle>
            <CardDescription>
              The full text of your uploaded document
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[500px] w-full rounded-md border p-4">
              <div className="whitespace-pre-line font-mono text-sm">
                {result.originalText}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
