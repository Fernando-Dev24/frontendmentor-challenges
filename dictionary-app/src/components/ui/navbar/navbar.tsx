import { FontSelector } from "./font-selector";
import { ThemeToggler } from "./theme-toggler";
import {
  BsJournalBookmark,
  // BsToggleOn,
  // BsMoon,
} from "react-icons/bs";

export const Navbar = () => {
  return (
    <nav className="py-5 flex justify-between items-center">
      <figure about="logo">
        <BsJournalBookmark size={25} className="text-neutral-900/50" />
      </figure>

      {/* TOOGLE THEME */}
      <div className="flex items-center">
        {/* FONT SELECTOR */}
        <FontSelector />

        {/* SEPARATOR */}
        <div className="mx-3">|</div>

        <ThemeToggler />
      </div>
    </nav>
  );
};
