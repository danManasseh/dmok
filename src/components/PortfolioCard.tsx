import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Project } from '@/data/projects';

interface PortfolioCardProps {
  project: Project;
}

export function PortfolioCard({ project }: PortfolioCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${project.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <Card
      onClick={handleClick}
      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl border border-border bg-card m-2 sm:m-3 md:m-4"
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <CardHeader className="space-y-2 sm:space-y-3 p-4 sm:p-5 md:p-6">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 sm:px-3 py-0.5 sm:py-1 bg-neutral text-neutral-foreground rounded-md text-xs font-body font-normal"
            >
              {tag}
            </span>
          ))}
        </div>
        <CardTitle className="text-lg sm:text-xl md:text-2xl font-sans font-medium text-card-foreground group-hover:text-tertiary transition-colors duration-300">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-5 md:p-6 pt-0">
        <CardDescription className="text-sm sm:text-base font-body font-light text-muted-foreground">
          {project.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
