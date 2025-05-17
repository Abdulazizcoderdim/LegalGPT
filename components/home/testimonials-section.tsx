import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Freelance Designer",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    content:
      "LegalGPT helped me understand my client contracts without the legal jargon. It's like having a lawyer on standby, but more affordable!",
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    content:
      "As a startup founder, I deal with lots of legal documents. LegalGPT saves me time and money by helping me understand agreements before sending them to my lawyer.",
  },
  {
    name: "Emily Rodriguez",
    role: "Law Student",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    content:
      "This tool is incredible for studying legal documents. It breaks down complex cases into digestible summaries and helps me learn faster.",
  },
];

export function TestimonialsSection() {
  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of satisfied users who trust LegalGPT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                  <p className="text-muted-foreground">
                    "{testimonial.content}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
