"use client";

import { useProviderContext } from "@/providers";
import { BsMoon, BsSun, BsToggleOff, BsToggleOn } from "react-icons/bs";

export const ThemeToggler = () => {
  const { isDark, handleIsDark } = useProviderContext();

  return (
    <div className="flex items-center" onClick={handleIsDark}>
      {isDark ? (
        <>
          <BsToggleOn
            size={25}
            className="mr-3.5 cursor-pointer dark:text-white/80"
          />
          <BsMoon
            size={25}
            className="text-neutral-900/70 dark:text-white/50"
          />
        </>
      ) : (
        <>
          <BsToggleOff
            size={25}
            className="mr-3.5 cursor-pointer dark:text-white/80"
          />
          <BsSun size={25} className="text-neutral-900/70 dark:text-white/50" />
        </>
      )}
    </div>
  );
};
