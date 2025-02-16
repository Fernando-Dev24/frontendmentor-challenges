import { BsSearch } from "react-icons/bs";

export const SearchBar = () => {
  return (
    <section className="py-10">
      <form className="w-full">
        <div className="relative">
          <input
            type="text"
            placeholder="Search a word"
            className="w-full py-3 px-5 rounded-full font-bold outline-none bg-indigo-500/20"
          />
          <BsSearch
            size={20}
            className="absolute top-1/2 transform -translate-y-1/2 right-5 text-indigo-500"
          />
        </div>
      </form>
    </section>
  );
};
