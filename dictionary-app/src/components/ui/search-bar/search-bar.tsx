"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(() => {
      return e.target.value.trim().toLowerCase().replace(/\//g, "");
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) return;

    // Send word as a param on url and catch it on the server side
    router.replace(`/${inputValue}`);
  };

  return (
    <section className="py-10">
      <form className="w-full" onSubmit={onSubmit}>
        <div className="relative">
          <input
            type="text"
            placeholder="Search a word"
            className="w-full py-3 px-5 rounded-full font-bold outline-none bg-indigo-500/20"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="absolute top-1/2 transform -translate-y-1/2 right-5 text-indigo-500"
          >
            <BsSearch size={20} />
          </button>
        </div>
      </form>
    </section>
  );
};
