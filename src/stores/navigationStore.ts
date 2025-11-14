import { create } from 'zustand';

interface NavigationState {
  activeSection: string;
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  setActiveSection: (section: string) => void;
  setIsScrolled: (scrolled: boolean) => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activeSection: 'home',
  isScrolled: false,
  isMobileMenuOpen: false,
  setActiveSection: (section) => set({ activeSection: section }),
  setIsScrolled: (scrolled) => set({ isScrolled: scrolled }),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
}));
