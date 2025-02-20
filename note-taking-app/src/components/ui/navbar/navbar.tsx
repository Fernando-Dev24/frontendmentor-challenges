import { IoSearchOutline, IoSettingsOutline } from "react-icons/io5";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-10 px-10 border-b border-gray-200">
      {/* TITLE */}
      <div>
        <h1 className="text-4xl font-medium">All Notes</h1>
      </div>

      <div className="flex items-center">
        <form className="mr-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by title, content, or tags..."
              className="min-w-[150px] w-[400px] max-w-[500px] py-3 px-5 pl-10 border border-gray-300 rounded-md outline-none focus:shadow-sm text-lg focus:border-gray-400 transition-all duration-150"
            />
            <IoSearchOutline
              size={20}
              className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400"
            />
          </div>
        </form>

        <button className="p-3 rounded-md transition-colors duration-150 hover:bg-gray-100/70">
          <IoSettingsOutline size={30} className="text-gray-600" />
        </button>
      </div>
    </nav>
  );
};
