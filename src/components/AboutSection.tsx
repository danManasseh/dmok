import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DownloadIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { personalInfo } from '@/data/personalInfo';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (!section || !image || !content) return;

    gsap.fromTo(
      image,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      content,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-neutral">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div ref={imageRef} className="flex justify-center">
            <Card className="overflow-hidden rounded-lg shadow-lg border-0 bg-card">
              <img
                src="/ppp.jpg"
                alt="portrait"
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
            </Card>
          </div>

          {/* Content Column */}
          <div ref={contentRef} className="space-y-6 md:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-medium text-foreground">
              About Me
            </h2>
            <div className="space-y-4 md:space-y-6">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base md:text-lg font-body font-light text-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-sans font-medium text-foreground">Technical Skills</h3>
              {personalInfo.skills.map((skillGroup) => (
                <div key={skillGroup.category} className="space-y-2 md:space-y-3">
                  <h4 className="text-base sm:text-lg font-sans font-medium text-foreground">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary text-primary-foreground rounded-md text-xs sm:text-sm font-body font-normal"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2 md:pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-normal text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 rounded-lg transition-all duration-300"
                onClick={() => {
                  window.open('#resume', '_self');
                }}
              >
                <DownloadIcon className="mr-2 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
