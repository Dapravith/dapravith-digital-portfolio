
import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type Language = "en" | "kh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState<Language>(() => {
    // Check local storage for saved language
    const savedLanguage = localStorage.getItem("language") as Language;
    return savedLanguage || "en";
  });

  useEffect(() => {
    // Change i18n language when context language changes
    i18n.changeLanguage(language);
    // Save to local storage
    localStorage.setItem("language", language);
  }, [language, i18n]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
