"use client";

import { useState } from "react";
import { UploadFile } from "@/components/analyze/upload-file";
import { TextInput } from "@/components/analyze/text-input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { AnalysisResult } from "./analysis-result";
import { HighlightItem } from "@/types";
import axios from "axios";

// Mock data - in a real app, this would come from the AI analysis
const mockAnalysis = {
  summary:
    "This is a standard employment agreement that outlines the terms of employment between the employer and employee. It includes provisions for compensation, benefits, termination, and confidentiality.",
  highlights: [
    {
      title: "Non-compete Clause",
      description:
        "Section 8 restricts you from working with competitors for 2 years after employment. This is longer than typical in the industry.",
      severity: "warning",
    },
    {
      title: "Intellectual Property Assignment",
      description:
        "All work created during employment belongs to the company, even if created outside of work hours.",
      severity: "high",
    },
    {
      title: "Termination Period",
      description:
        "The company can terminate employment with only 1 week notice during the first year.",
      severity: "medium",
    },
  ] as HighlightItem[],
  originalText:
    'EMPLOYMENT AGREEMENT\n\nThis Employment Agreement (the "Agreement") is made and entered into as of [Date], by and between [Company Name], a [State] corporation (the "Company"), and [Employee Name], an individual (the "Employee").\n\n1. EMPLOYMENT. The Company hereby employs the Employee, and the Employee hereby accepts employment with the Company, upon the terms and conditions set forth in this Agreement.\n\n2. POSITION AND DUTIES. The Employee shall serve as [Position] of the Company, with such duties and responsibilities as may be assigned from time to time by the [Supervisor/Board of Directors]. The Employee shall devote full time and attention to the affairs of the Company.\n\n3. COMPENSATION. As compensation for services rendered under this Agreement, the Employee shall be entitled to receive from the Company:\n   a. A base salary of $[Amount] per annum, payable in accordance with the Company\'s normal payroll procedures.\n   b. Participation in the Company\'s employee benefit programs, including health insurance, retirement plans, and vacation time.\n\n8. NON-COMPETITION. For a period of two (2) years following the termination of the Employee\'s employment with the Company, the Employee shall not, directly or indirectly, engage in or have any interest in any entity that competes with the business of the Company in any jurisdiction where the Company does business.\n\n9. INTELLECTUAL PROPERTY. Any invention, improvement, concept, discovery or other intellectual property developed by the Employee, whether during working hours or on the Employee\'s own time, shall be the sole and exclusive property of the Company.',
};

export function AnalyzeDocument() {
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<
    typeof mockAnalysis | null
  >(null);

  const handleAnalyze = async () => {
    if (!text && !file) {
      toast.error("No document provided");
      return;
    }

    setIsAnalyzing(true);

    const res = await axios.post("/api/analyze", {});
  };

  const handleFileChange = (file: File | null) => {
    setFile(file);
    // In a real app, we would extract text from the file here
    // For now, we'll just set a placeholder message
    if (file) {
      setText(`[Text extracted from ${file.name}]`);
    }
  };

  const handleTextChange = (value: string) => {
    setText(value);
  };

  return (
    <div className="space-y-8">
      {!analysisResult ? (
        <>
          <Tabs defaultValue="paste" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="paste">Paste Text</TabsTrigger>
              <TabsTrigger value="upload">Upload Document</TabsTrigger>
            </TabsList>
            <TabsContent value="paste">
              <TextInput
                text={text}
                onChange={handleTextChange}
                placeholder="Paste your legal document text here..."
              />
            </TabsContent>
            <TabsContent value="upload">
              <UploadFile onFileChange={handleFileChange} />
            </TabsContent>
          </Tabs>

          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={handleAnalyze}
              disabled={isAnalyzing || (!text && !file)}
              className="px-8"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Analyze Document"
              )}
            </Button>
          </div>
        </>
      ) : (
        <>
          <AnalysisResult result={analysisResult} />
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              onClick={() => {
                setAnalysisResult(null);
                setText("");
                setFile(null);
              }}
            >
              Analyze Another Document
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
