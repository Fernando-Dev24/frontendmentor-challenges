import {
  BsJournalBookmark,
  BsToggleOff,
  BsSun,
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
        <small>Font selector</small>

        <div className="mx-3">|</div>

        <div className="flex items-center">
          <BsToggleOff size={25} className="mr-3.5 cursor-pointer" />
          <BsSun size={25} className="text-neutral-900/70" />
        </div>
      </div>
    </nav>
  );
};
