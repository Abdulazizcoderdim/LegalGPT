import { CTASection } from "@/components/home/cta-section";
import { FAQSection } from "@/components/home/faq-section";
import { HeroSection } from "@/components/home/hero-section";
import { HowItWorks } from "@/components/home/how-it-works";
import { SecuritySection } from "@/components/home/security-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { UseCases } from "@/components/home/use-cases";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <HeroSection />
      <HowItWorks />
      <UseCases />
      <SecuritySection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
