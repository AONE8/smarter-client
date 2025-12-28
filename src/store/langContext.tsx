import { createContext, useContext, useEffect, useState } from "react";

export type LangType = "en" | "uk";

type LanguageContextType = {
  language: LangType;
  setLanguage: (lang: LangType) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const defaultLanguageFunc = () => {
  if (localStorage.getItem("lang")) {
    document.documentElement.lang = localStorage.getItem("lang") as LangType;
    return localStorage.getItem("lang") as LangType;
  }

  const isUkrainian = navigator.language.startsWith("uk");

  document.documentElement.lang = isUkrainian ? "uk" : "en";

  return isUkrainian ? "uk" : "en";
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguageContext must be used within a LanguageProvider"
    );
  }

  return context;
};

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<LangType>(defaultLanguageFunc);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("lang", language);
    setLanguage(language);
  }, [language]);

  const contextValue = { language, setLanguage };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
