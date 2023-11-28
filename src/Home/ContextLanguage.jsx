import React, { createContext, useState, useContext } from "react";

// Crear un contexto para el idioma
const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Idioma predeterminado: inglés

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en"); // Alternar entre inglés y español
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
