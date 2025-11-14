import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDownIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/personalInfo';

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      );
  }, []);

  const handleScrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
        //   alt="hero background"
          src="https://c.animaapp.com/mhxune92GUYq1t/img/ai_1.mp4"
          poster="https://c.animaapp.com/mhxune92GUYq1t/img/ai_1-poster.png"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/60 to-primary"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 text-center">
        <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-medium text-white mb-6 md:mb-8 px-4">
          {personalInfo.name}
        </h1>
        <p ref={subtitleRef} className="text-base sm:text-lg md:text-xl lg:text-2xl font-body font-light text-white mb-8 md:mb-12 max-w-3xl mx-auto px-4">
          {personalInfo.tagline}
        </p>
        <div ref={ctaRef}>
          <Button
            onClick={handleScrollToPortfolio}
            size="lg"
            className="bg-tertiary text-tertiary-foreground hover:bg-tertiary/90 font-normal text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 rounded-lg transition-all duration-300"
          >
            View My Work
            <ArrowDownIcon className="ml-2 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ArrowDownIcon className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
      </div>
    </section>
  );
}
