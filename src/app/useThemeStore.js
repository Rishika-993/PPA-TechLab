import { create } from 'zustand';

const useThemeStore = create((set) => ({
  theme: 'light',
  lightTheme: () => set((state) => ({ theme: state.theme == 'light' })),
  darkTheme: () => set((state) => ({ theme: state.theme == 'dark' })),
}));


export default useThemeStore;
