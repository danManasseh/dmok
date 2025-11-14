import { create } from 'zustand';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactState {
  formData: ContactFormData;
  isSubmitting: boolean;
  isSubmitted: boolean;
  updateFormData: (data: Partial<ContactFormData>) => void;
  submitForm: () => Promise<void>;
  resetForm: () => void;
}

export const useContactStore = create<ContactState>((set) => ({
  formData: {
    name: '',
    email: '',
    message: '',
  },
  isSubmitting: false,
  isSubmitted: false,
  updateFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  submitForm: async () => {
    set({ isSubmitting: true });
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    set({ isSubmitting: false, isSubmitted: true });
    setTimeout(() => {
      set({ isSubmitted: false });
    }, 5000);
  },
  resetForm: () =>
    set({
      formData: { name: '', email: '', message: '' },
      isSubmitted: false,
    }),
}));
