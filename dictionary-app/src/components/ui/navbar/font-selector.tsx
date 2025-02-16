"use client";

import { BsChevronDown, BsFileFont } from "react-icons/bs";
import { monospaceFont, sansFont, serifFont } from "@/config";
import { useState } from "react";
import clsx from "clsx";

const fontOptions = [
  { value: "serif", label: "Serif", font_style: serifFont.className },
  { value: "sans-serif", label: "Sans", font_style: sansFont.className },
  {
    value: "monospace",
    label: "Monospace",
    font_style: monospaceFont.className,
  },
];

export const FontSelector = () => {
  const [showSelector, setShowSelector] = useState(false);

  const toggleSelector = () => {
    setShowSelector(!showSelector);
  };

  return (
    <div className="relative">
      <div>
        <button className="flex items-center" onClick={toggleSelector}>
          Serif
          <BsChevronDown size={20} className="ml-2 text-indigo-600" />
        </button>
      </div>

      <div
        className={clsx(
          "absolute top-[30px] -left-[80px] flex flex-col p-5 rounded border border-gray-300 bg-gray-100 z-20 transform transition-all",
          {
            hidden: !showSelector,
            "block fade-in": showSelector,
          }
        )}
      >
        {fontOptions.map((item) => (
          <button
            key={item.value}
            className={`${item.font_style} w-full flex items-center text-left py-1.5`}
          >
            <BsFileFont size={20} className="mr-2" />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};
