"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components";

import {
  IoHomeOutline,
  IoArchiveOutline,
  IoChevronForward,
  IoPricetagOutline,
} from "react-icons/io5";
import clsx from "clsx";

interface Props {
  className: React.HTMLAttributes<HTMLElement>["className"];
}

const mainPagesLinks = [
  {
    path: "/all",
    label: "All Notes",
    icon: <IoHomeOutline size={20} className="icon" />,
    icon_chevron: <IoChevronForward size={20} />,
  },
  {
    path: "/archived",
    label: "Archived Notes",
    icon: <IoArchiveOutline size={20} className="icon" />,
    icon_chevron: <IoChevronForward size={20} />,
  },
];

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

export const Sidebar = ({ className }: Props) => {
  const pathname = usePathname();

  return (
    <aside
      className={`${className} fixed top-0 left-0 w-[300px] h-screen p-5 border-r border-gray-200 overflow-y-auto scrollbar`}
    >
      {/* LOGO */}
      <Logo />

      {/* NOTES OPTIONS */}
      <div className="pb-5 border-b border-b-gray-200">
        {mainPagesLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={clsx(
              "btn w-full flex justify-between items-center mb-3",
              {
                active: pathname === link.path,
              }
            )}
          >
            <div className="flex items-center">
              {link.icon}
              {link.label}
            </div>

            {link.icon_chevron}
          </Link>
        ))}
      </div>

      {/* TAGS */}
      <div>
        <p className="mt-5 mb-3 text-gray-400">Tags</p>

        {tags.map((tag) => (
          <button
            key={tag.name}
            className="btn w-full flex items-center mb-3 capitalize"
          >
            <IoPricetagOutline size={20} className="icon" />
            {tag.name}
          </button>
        ))}
      </div>
    </aside>
  );
};
