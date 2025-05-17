"use client";

import Link from "next/link";
import { ScaleIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

const routes = [
  {
    href: "/",
    label: "Home",
    active: (pathname: string) => pathname === "/",
  },
  {
    href: "/analyze",
    label: "Analyze",
    active: (pathname: string) => pathname === "/analyze",
  },
  {
    href: "/chat",
    label: "Chat",
    active: (pathname: string) => pathname === "/chat",
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="border-b">
      <div className="flex h-16 justify-between items-center px-4 md:container">
        <Link href="/" className="flex items-center gap-x-2">
          <ScaleIcon className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">LegalGPT</span>
        </Link>
        <nav className="ml-auto md:ml-10 hidden md:flex items-center gap-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                route.active(pathname)
                  ? "text-black dark:text-white"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto md:ml-6 flex items-center gap-x-4">
          <ModeToggle />
          <div className="hidden md:block">
            <Button size="sm" asChild>
              <Link href="/analyze">Try for Free</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
