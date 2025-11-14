import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DownloadIcon, BriefcaseIcon, GraduationCapIcon, AwardIcon, FileTextIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { experiences } from '@/data/experience';
import { education } from '@/data/education';
import { certifications } from '@/data/certifications';

gsap.registerPlugin(ScrollTrigger);

export function ResumeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    gsap.fromTo(
      content,
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

  return (
    <section id="resume" ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-neutral">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div ref={contentRef} className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-medium text-foreground text-center mb-8 md:mb-12 lg:mb-16">
            Resume
          </h2>

          <Card className="p-6 sm:p-8 md:p-10 lg:p-12 bg-card border border-border shadow-lg">
            <div className="text-center space-y-6 md:space-y-8">
              <div className="flex justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center">
                  <FileTextIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary-foreground" strokeWidth={1.5} />
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-sans font-medium text-card-foreground">
                  Professional Experience & Education
                </h3>
                <p className="text-sm sm:text-base font-body font-light text-muted-foreground max-w-2xl mx-auto px-4">
                  Explore my professional journey, technical expertise, and academic background.
                </p>
              </div>

              {/* Experience Section */}
              <div className="bg-neutral rounded-lg p-4 sm:p-6 md:p-8 my-6 md:my-8 text-left">
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <BriefcaseIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" strokeWidth={1.5} />
                    <h4 className="text-xl sm:text-2xl font-sans font-medium text-neutral-foreground">Experience</h4>
                  </div>
                  
                  {experiences.slice(0, 3).map((exp) => (
                    <div key={exp.id} className="space-y-2 pb-4 sm:pb-6 border-b border-border last:border-0">
                      <div className="flex flex-col gap-1 sm:gap-2">
                        <h5 className="font-sans font-medium text-base sm:text-lg text-neutral-foreground">{exp.title}</h5>
                        <span className="text-xs sm:text-sm text-muted-foreground">{exp.period}</span>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground">{exp.company} • {exp.location}</p>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-muted-foreground mt-2">
                        {exp.description.slice(0, 2).map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                        {exp.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/10 text-primary rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div className="bg-neutral rounded-lg p-4 sm:p-6 md:p-8 my-6 md:my-8 text-left">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <GraduationCapIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" strokeWidth={1.5} />
                    <h4 className="text-xl sm:text-2xl font-sans font-medium text-neutral-foreground">Education</h4>
                  </div>
                  
                  {education.map((edu) => (
                    <div key={edu.id} className="space-y-2 pb-4 sm:pb-6 border-b border-border last:border-0">
                      <div className="flex flex-col gap-1 sm:gap-2">
                        <h5 className="font-sans font-medium text-base sm:text-lg text-neutral-foreground">
                          {edu.degree} in {edu.field}
                        </h5>
                        <span className="text-xs sm:text-sm text-muted-foreground">{edu.period}</span>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground">{edu.institution} • {edu.location}</p>
                      {edu.gpa && <p className="text-xs sm:text-sm text-muted-foreground">GPA: {edu.gpa}</p>}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                        {edu.coursework.map((course) => (
                          <span key={course} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-secondary/10 text-secondary rounded text-xs">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications Section */}
              <div className="bg-neutral rounded-lg p-4 sm:p-6 md:p-8 my-6 md:my-8 text-left">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <AwardIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" strokeWidth={1.5} />
                    <h4 className="text-xl sm:text-2xl font-sans font-medium text-neutral-foreground">Certifications</h4>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    {certifications.map((cert) => (
                      <div key={cert.id} className="p-3 sm:p-4 bg-card rounded-lg border border-border">
                        <h5 className="font-sans font-medium text-sm sm:text-base text-card-foreground mb-1">
                          {cert.name}
                        </h5>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                        <span className={`inline-block px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs ${
                          cert.status === 'completed' 
                            ? 'bg-success/10 text-success' 
                            : 'bg-warning/10 text-warning'
                        }`}>
                          {cert.status === 'completed' ? 'Completed' : 'In Progress'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-normal text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 rounded-lg transition-all duration-300"
                  onClick={() => {
                    window.print();
                  }}
                >
                  <DownloadIcon className="mr-2 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
                  Download PDF
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto font-normal text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 rounded-lg transition-all duration-300"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
