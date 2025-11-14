import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { personalInfo } from '@/data/personalInfo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          {/* Social Links */}
          <div className="flex gap-6 sm:gap-8">
            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-tertiary transition-colors duration-300"
                aria-label="GitHub"
              >
                <GithubIcon className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
              </a>
            )}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tertiary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-tertiary transition-colors duration-300"
              aria-label="Email"
            >
              <MailIcon className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-1 sm:space-y-2">
            <p className="text-sm sm:text-base font-body font-light text-primary-foreground px-4">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm font-body font-light text-primary-foreground/80 px-4">
              Software Engineer • {personalInfo.location}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
