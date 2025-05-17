import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "What types of legal documents can I analyze?",
      answer:
        "You can analyze various legal documents including contracts, agreements, terms of service, privacy policies, employment agreements, NDAs, and more. Our AI is trained to understand and explain different types of legal documents.",
    },
    {
      question: "How accurate is the AI analysis?",
      answer:
        "Our AI provides high-quality analysis based on the document content. However, it's designed to be an aid for understanding legal documents, not a replacement for professional legal advice. Always consult with a qualified legal professional for important decisions.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we take data security seriously. Your documents are processed securely and are not stored on our servers. All analysis happens in real-time, and we don't retain any document content after analysis is complete.",
    },
    {
      question: "Can I ask follow-up questions about my document?",
      answer:
        "Yes! After analysis, you can use our AI chat feature to ask specific questions about any part of your document. The AI will provide detailed explanations based on the context of your document.",
    },
    {
      question: "What file formats are supported?",
      answer:
        "Currently, we support PDF and TXT file formats. You can also directly paste text content into the analyzer. We're working on adding support for more file formats in the future.",
    },
  ];

  return (
    <div className="py-24 bg-muted/50" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about LegalGPT
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
