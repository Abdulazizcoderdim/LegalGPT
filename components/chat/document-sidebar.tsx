import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ChevronLeft } from "lucide-react";
import Link from "next/link";

interface DocumentSidebarProps {
  document: {
    title: string;
    summary: string;
  };
}

export function DocumentSidebar({ document }: DocumentSidebarProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Current Document</CardTitle>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/analyze">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back
            </Link>
          </Button>
        </div>
        <CardDescription>{document.title}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm">
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Summary</h3>
            <p className="text-muted-foreground">{document.summary}</p>
          </div>

          <div>
            <h3 className="font-medium mb-2">Key Issues</h3>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Non-compete clause (2 years)</li>
              <li>IP ownership clause</li>
              <li>1-week termination notice</li>
            </ul>
          </div>

          <div className="pt-2">
            <h3 className="font-medium mb-2">Suggested Questions</h3>
            <div className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-xs h-auto py-2"
              >
                What does the non-compete clause mean?
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-sm h-auto py-2"
              >
                Is the IP clause standard?
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-sm h-auto py-2"
              >
                Can I negotiate the termination period?
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
