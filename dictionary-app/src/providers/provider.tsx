"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { serifFont } from "@/config";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Loader } from "@/components";

interface Props {
  children: React.ReactNode;
}

interface ContextTyped {
  font: NextFontWithVariable;
  handleFont: (font: NextFontWithVariable) => void;
  isDark: boolean;
  handleIsDark: () => void;
}

/* context */
const ProviderContext = createContext({} as ContextTyped);
export const useProviderContext = () => useContext(ProviderContext);

/* provider */
export const Provider = ({ children }: Props) => {
  const [font, setFont] = useState<NextFontWithVariable>(serifFont);
  const [isLoading, setIsLoading] = useState(true);

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  const handleFont = (font: NextFontWithVariable) => {
    localStorage.setItem("font", JSON.stringify(font));
    setFont(font);
  };

  const handleIsDark = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const font = localStorage.getItem("font");
    if (font) {
      setFont(JSON.parse(font));
    }
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ProviderContext.Provider
      value={{ font, isDark, handleFont, handleIsDark }}
    >
      <main className={`${font.className} antialiased container`}>
        {children}
      </main>
    </ProviderContext.Provider>
  );
};
