"use client";

import { IoSettingsOutline } from "react-icons/io5";
import { SearchNoteForm } from "../../form/search-note-form";
import { usePathname } from "next/navigation";

interface Props {
  className: React.HTMLAttributes<HTMLElement>["className"];
}

export const Navbar = ({ className }: Props) => {
  const pathname = usePathname();

  return (
    <nav
      className={`${className} justify-between items-center py-10 px-10 border-b border-gray-200`}
    >
      {/* TITLE */}
      <div>
        <h1 className="text-3xl font-medium capitalize">
          {pathname.split("/").at(-1)} Notes
        </h1>
      </div>

      <div className="flex items-center">
        <SearchNoteForm />

        <button className="ml-12 p-3 rounded-md transition-colors duration-150 hover:bg-gray-100/70">
          <IoSettingsOutline size={30} className="text-gray-600" />
        </button>
      </div>
    </nav>
  );
};
