import { IoSearchOutline } from "react-icons/io5";

export const SearchNoteForm = () => {
  return (
    <form className="w-full">
      <label
        htmlFor="search"
        className="inline-block mb-1 text-normal text-gray-400 lg:hidden"
      >
        Search a note
      </label>
      <div className="relative">
        <input
          type="text"
          id="search"
          placeholder="Search by title, content, or tags..."
          className="w-full lg:w-[400px] py-3 px-5 pl-10 border border-gray-300 rounded-md outline-none focus:shadow-sm text-base md:text-lg focus:border-gray-400 transition-all duration-150 placeholder:text-gray-300"
        />
        <IoSearchOutline
          size={20}
          className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400"
        />
      </div>
    </form>
  );
};
