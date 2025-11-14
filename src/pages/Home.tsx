import { HeaderNav } from '@/components/HeaderNav';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { ResumeSection } from '@/components/ResumeSection';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioGrid />
        <ResumeSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
