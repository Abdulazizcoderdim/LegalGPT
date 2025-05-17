import { Briefcase, Building, GraduationCap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function UseCases() {
  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Who Can Benefit
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            LegalGPT helps everyone understand complex legal documents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Freelancers</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Understand client contracts, NDAs, and agreements without hiring
                an expensive lawyer. Know your rights and obligations before
                signing.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Small Businesses</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Review vendor agreements, terms of service, and partnership
                contracts. Save on legal fees while still getting the insights
                you need.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Students</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Study legal documents, understand case law, and get help with
                legal research. Make complex legal language accessible for your
                studies.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
