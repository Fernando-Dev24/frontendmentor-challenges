"use client";

import { BsChevronDown, BsFileFont } from "react-icons/bs";
import { monospaceFont, sansFont, serifFont } from "@/config";
import { useState } from "react";
import clsx from "clsx";
import type { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { useProviderContext } from "@/providers";

const fontOptions = [
  { value: "serif", label: "Merriweather", font_style: serifFont },
  { value: "sans-serif", label: "Poppins", font_style: sansFont },
  {
    value: "monospace",
    label: "Ubuntu Mono",
    font_style: monospaceFont,
  },
];

export const FontSelector = () => {
  const { font, handleFont } = useProviderContext();

  const [showSelector, setShowSelector] = useState(false);

  const toggleSelector = () => {
    setShowSelector(!showSelector);
  };

  const onSelectFont = (font: NextFontWithVariable) => {
    handleFont(font);
    setShowSelector(false);
  };

  return (
    <div className="relative">
      <div>
        <button
          className="flex items-center capitalize"
          onClick={toggleSelector}
        >
          {font.variable.split("_")[0]}
          <BsChevronDown size={20} className="ml-2 text-indigo-600" />
        </button>
      </div>

      <div
        className={clsx(
          "absolute top-[30px] -left-[80px] flex flex-col p-5 rounded border border-gray-300 bg-gray-100 z-20 transform transition-all dark:bg-[#171717] dark:border-gray-700",
          {
            hidden: !showSelector,
            "block fade-in": showSelector,
          }
        )}
      >
        {fontOptions.map((item) => (
          <button
            key={item.value}
            onClick={() => onSelectFont(item.font_style)}
            className={`${item.font_style.className} w-full flex items-center text-left py-1.5`}
          >
            <BsFileFont size={20} className="mr-2" />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};
