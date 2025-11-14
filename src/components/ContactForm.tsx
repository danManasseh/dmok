import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MailIcon, SendIcon, CheckCircle2Icon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useContactStore } from '@/stores/contactStore';
import { personalInfo } from '@/data/personalInfo';

gsap.registerPlugin(ScrollTrigger);

export function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const { formData, isSubmitting, isSubmitted, updateFormData, submitForm } = useContactStore();

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;

    if (!section || !form) return;

    gsap.fromTo(
      form,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm();
  };

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div ref={formRef} className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-medium text-foreground text-center mb-6 md:mb-8">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-body font-light text-muted-foreground text-center mb-8 md:mb-12 lg:mb-16 max-w-2xl mx-auto px-4">
            Have a project in mind or want to collaborate? Feel free to reach out. I'd love to hear from you!
          </p>

          <Card className="p-6 sm:p-8 md:p-10 lg:p-12 bg-card border border-border shadow-lg">
            {isSubmitted ? (
              <div className="text-center space-y-4 sm:space-y-6 py-8 sm:py-12">
                <div className="flex justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-success/10 rounded-full flex items-center justify-center">
                    <CheckCircle2Icon className="w-8 h-8 sm:w-10 sm:h-10 text-success" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-sans font-medium text-card-foreground">Message Sent!</h3>
                <p className="text-sm sm:text-base font-body font-light text-muted-foreground px-4">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm sm:text-base font-body font-normal text-card-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => updateFormData({ name: e.target.value })}
                    required
                    className="h-10 sm:h-12 text-sm sm:text-base bg-background text-foreground border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base font-body font-normal text-card-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => updateFormData({ email: e.target.value })}
                    required
                    className="h-10 sm:h-12 text-sm sm:text-base bg-background text-foreground border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm sm:text-base font-body font-normal text-card-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => updateFormData({ message: e.target.value })}
                    required
                    rows={6}
                    className="text-sm sm:text-base bg-background text-foreground border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-normal text-sm sm:text-base py-4 sm:py-6 rounded-lg transition-all duration-300"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <SendIcon className="mr-2 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}

            {/* Alternative Contact */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
              <p className="text-center text-sm sm:text-base font-body font-light text-muted-foreground mb-4 sm:mb-6">
                Or reach me directly:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex flex-col items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 font-body font-normal"
                >
                  <MailIcon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                  <span className="text-xs sm:text-sm text-center break-all">{personalInfo.email}</span>
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex flex-col items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 font-body font-normal"
                >
                  <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                  <span className="text-xs sm:text-sm text-center">{personalInfo.phone}</span>
                </a>
                <div className="flex flex-col items-center gap-2 text-muted-foreground font-body font-normal">
                  <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                  <span className="text-xs sm:text-sm text-center">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
