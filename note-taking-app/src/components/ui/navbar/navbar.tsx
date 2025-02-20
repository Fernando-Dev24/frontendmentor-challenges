import { IoSettingsOutline } from "react-icons/io5";
import { SearchNoteForm } from "../../form/search-note-form";

interface Props {
  className: React.HTMLAttributes<HTMLElement>["className"];
}

export const Navbar = ({ className }: Props) => {
  return (
    <nav
      className={`${className} justify-between items-center py-10 px-10 border-b border-gray-200`}
    >
      {/* TITLE */}
      <div>
        <h1 className="text-4xl font-medium">All Notes</h1>
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
