"use client";

import { useState } from "react";
import { UploadFile } from "@/components/analyze/upload-file";
import { TextInput } from "@/components/analyze/text-input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { AnalysisResult } from "./analysis-result";
import axios from "axios";

export function AnalyzeDocument() {
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalyze = async () => {
    try {
      if (!text && !file) {
        toast.error("No document provided");
        return;
      }

      setIsAnalyzing(true);

      const res = await axios.post("/api/analyze", { input: text });

      setAnalysisResult(res.data);
      setIsAnalyzing(false);
    } catch (error) {
      console.error("Error analyzing document:", error);
      toast.error("Error analyzing document");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleFileChange = async (file: File | null) => {
    setFile(file);
    const formData = new FormData();
    formData.append("file", file!);

    const res = await axios.post("/api/upload", {
      formData,
    });

    if (file) {
      setText(res.data.text);
    }
    console.log("Extracted text:", res.data);
  };

  const handleTextChange = (value: string) => {
    setText(value);
  };

  console.log(analysisResult);

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
