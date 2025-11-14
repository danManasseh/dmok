import { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { useNavigationStore } from '@/stores/navigationStore';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';

const navItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { id: 'resume', label: 'Resume', href: '#resume' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function HeaderNav() {
  const { activeSection, isScrolled, isMobileMenuOpen, setActiveSection, setIsScrolled, toggleMobileMenu, closeMobileMenu } = useNavigationStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection, setIsScrolled]);

  const handleNavClick = (href: string, id: string) => {
    closeMobileMenu();
    setActiveSection(id);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-md' : 'bg-transparent'
      }`}
      style={{ minHeight: '64px' }}
    >
      <nav className="container mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home', 'home');
          }}
          className="text-xl sm:text-2xl font-sans font-semibold text-primary-foreground hover:opacity-80 transition-opacity"
        >
          DM
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-2">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuLink
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.id);
                  }}
                  className={`px-3 lg:px-4 py-2 text-sm lg:text-base font-normal transition-all duration-300 cursor-pointer rounded-md ${
                    activeSection === item.id
                      ? 'text-tertiary font-medium'
                      : 'text-primary-foreground hover:text-tertiary'
                  }`}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile MenuIcon Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMobileMenu}
          className="md:hidden bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <XIcon className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} /> : <MenuIcon className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />}
        </Button>
      </nav>

      {/* Mobile Navigation MenuIcon */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10">
          <NavigationMenu className="w-full">
            <NavigationMenuList className="flex flex-col w-full p-3 sm:p-4 gap-1 sm:gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id} className="w-full">
                  <NavigationMenuLink
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, item.id);
                    }}
                    className={`block w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-normal transition-all duration-300 cursor-pointer rounded-md ${
                      activeSection === item.id
                        ? 'bg-primary-foreground/10 text-tertiary font-medium'
                        : 'text-primary-foreground hover:bg-primary-foreground/5 hover:text-tertiary'
                    }`}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </header>
  );
}
