import Image from "next/image";
import { Title } from "@/components";

import {
  IoHomeOutline,
  IoArchiveOutline,
  IoChevronForward,
  IoPricetagOutline,
} from "react-icons/io5";

const tags = [
  { name: "cooking" },
  { name: "dev" },
  { name: "fitness" },
  { name: "health" },
  { name: "personal" },
  { name: "react" },
  { name: "recipes" },
  { name: "shopping" },
  { name: "travel" },
  { name: "typescript" },
];

export const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 w-[300px] h-screen p-5 border-r border-gray-300 overflow-y-auto scrollbar">
      {/* LOGO */}
      <div className="flex items-center mb-8">
        <Image
          src={"/logo/logo.svg"}
          alt="logo"
          width={50}
          height={50}
          className="mr-5"
        />
        <Title title="Notes" />
      </div>

      {/* NOTES OPTIONS */}
      <div className="pb-5 border-b border-b-gray-200">
        <button className="btn active w-full flex justify-between items-center mb-3">
          <div className="flex items-center">
            <IoHomeOutline size={20} className="icon mr-2" />
            All Notes
          </div>

          <IoChevronForward size={20} />
        </button>

        <button className="btn w-full flex justify-between items-center">
          <div className="flex items-center">
            <IoArchiveOutline size={20} className="icon mr-2" />
            Archived Notes
          </div>

          <IoChevronForward size={20} />
        </button>
      </div>

      {/* TAGS */}
      <div>
        <p className="mt-5 mb-3 text-gray-400">Tags</p>

        {tags.map((tag) => (
          <button
            key={tag.name}
            className="btn w-full flex items-center mb-3 capitalize"
          >
            <IoPricetagOutline size={20} className="icon mr-2" />
            {tag.name}
          </button>
        ))}
      </div>
    </aside>
  );
};
