import { createContext, useContext, useState } from "react";
import { Translation, translations } from "../lang";

const LangContext = createContext({
  t: translations["en"],
  lang: "en",
  toggleLang: () => {},
});

export default function LangContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    setLang((lang) => (lang === "en" ? "he" : "en"));
  };

  return (
    <LangContext.Provider
      value={{ lang, t: translations[lang] as Translation, toggleLang }}
    >
      {children}
    </LangContext.Provider>
  );
}

export const useTranslate = () => useContext(LangContext);
