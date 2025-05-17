import Link from "next/link";
import { ScaleIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-8 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <ScaleIcon className="h-5 w-5 mr-2 text-primary" />
            <span className="text-lg font-semibold">LegalGPT</span>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition"
            >
              Privacy Policy
            </Link>
            <a
              href="mailto:contact@legalgpt.com"
              className="text-sm text-muted-foreground hover:text-primary transition"
            >
              contact@legalgpt.com
            </a>
          </div>
        </div>
        <div className="text-center mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} LegalGPT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
