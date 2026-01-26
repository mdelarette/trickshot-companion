import { createContext } from 'react';

export type LanguageContextType = {
  userLangage: string;
  setUserLanguage: (language: string) => void;
} | null;

export const LanguageContext = createContext<LanguageContextType>(null);
