"use client";

import React, { createContext, useContext, useState } from "react";
import { monospaceFont, sansFont, serifFont } from "@/config";

interface Props {
  children: React.ReactNode;
}

const FontContext = createContext({});

export const useFontContext = () => useContext(FontContext);

export const FontProvider = ({ children }: Props) => {
  /* STATES */
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
    <FontContext.Provider value={{ font, handleFont }}>
      <body className={`${font.className} antialiased custom-container`}>
        {children}
      </body>
    </FontContext.Provider>
  );
};
