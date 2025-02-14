"use client";

import { createContext, useContext, useState } from "react";
import { monospaceFont, sansFont, serifFont } from "@/config";

interface Props {
  children: React.ReactNode;
}

/* context */
const ProviderContext = createContext({});
export const useProviderContext = () => useContext(ProviderContext);

/* provider */
export const Provider = ({ children }: Props) => {
  const [font, setFont] = useState(serifFont);

  const handleFont = (font: "monospace" | "sans-serif" | "serifFont") => {
    switch (font) {
      case "monospace":
        setFont(monospaceFont);
        break;

      case "sans-serif":
        setFont(sansFont);
        break;

      case "serifFont":
        setFont(serifFont);
        break;

      default:
        setFont(serifFont);
        break;
    }
  };

  return (
    <ProviderContext.Provider value={{ font, handleFont }}>
      <body className={`${font.className} antialiased container`}>
        {children}
      </body>
    </ProviderContext.Provider>
  );
};
