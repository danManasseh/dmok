import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { projects } from '@/data/projects';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-6">
          <h2 className="text-h2 font-sans font-medium text-foreground">Project Not Found</h2>
          <Button
            onClick={() => navigate('/')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal text-base px-6 py-3 rounded-lg transition-all duration-300"
          >
            <ArrowLeftIcon className="mr-2 w-5 h-5" strokeWidth={1.5} />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <Button
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              const portfolioSection = document.getElementById('portfolio');
              if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
          variant="ghost"
          className="mb-8 md:mb-12 bg-transparent text-foreground hover:bg-neutral hover:text-neutral-foreground font-normal text-sm sm:text-base"
        >
          <ArrowLeftIcon className="mr-2 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
          Back to Portfolio
        </Button>

        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
          {/* Project Header */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-primary text-primary-foreground rounded-md text-xs sm:text-sm font-body font-normal"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans font-medium text-foreground">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-body font-light text-muted-foreground">
              {project.description}
            </p>
          </div>

          {/* Project Image */}
          <Card className="overflow-hidden border-0 shadow-xl bg-card">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </Card>

          {/* Project Details */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-medium text-foreground mb-4 md:mb-6">
                Project Overview
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-body font-light text-foreground leading-relaxed">
                {project.detailedDescription}
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans font-medium text-foreground mb-3 md:mb-4">
                Key Highlights
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <p className="text-sm sm:text-base md:text-lg font-body font-light text-foreground">
                      {highlight}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans font-medium text-foreground mb-3 md:mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary text-primary-foreground rounded-md text-xs sm:text-sm md:text-base font-body font-normal"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans font-medium text-foreground mb-3 md:mb-4">
                Category
              </h3>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-neutral text-neutral-foreground rounded-md text-xs sm:text-sm md:text-base font-body font-normal">
                {project.category}
              </span>
            </div>
          </div>

          {/* Additional Project Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <Card className="overflow-hidden border-0 shadow-lg bg-card">
              <img
                src={project.image}
                alt={`${project.title} detail 1`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </Card>
            <Card className="overflow-hidden border-0 shadow-lg bg-card">
              <img
                src={project.image}
                alt={`${project.title} detail 2`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
