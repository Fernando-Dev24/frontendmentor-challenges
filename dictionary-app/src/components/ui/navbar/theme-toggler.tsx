"use client";

import { useState } from "react";
import { BsMoon, BsSun, BsToggleOff, BsToggleOn } from "react-icons/bs";

export const ThemeToggler = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    // document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex items-center" onClick={toggleTheme}>
      {isDarkTheme ? (
        <>
          <BsToggleOn size={25} className="mr-3.5 cursor-pointer" />
          <BsMoon size={25} className="text-neutral-900/70" />
        </>
      ) : (
        <>
          <BsToggleOff size={25} className="mr-3.5 cursor-pointer" />
          <BsSun size={25} className="text-neutral-900/70" />
        </>
      )}
    </div>
  );
};
