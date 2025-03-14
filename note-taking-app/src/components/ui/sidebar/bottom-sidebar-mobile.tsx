"use client";

import { logout } from "@/actions";
import { signOut } from "next-auth/react";
import { useProvider } from "@/hooks/useProvider";
import { useRouter } from "next/navigation";

import {
  IoArchiveOutline,
  IoHomeOutline,
  IoLogOutOutline,
  IoPricetagsOutline,
  IoSearchOutline,
  IoSettingsOutline,
} from "react-icons/io5";

interface Props {
  className: React.HTMLAttributes<HTMLElement>["className"];
}

interface ButtonProps {
  label: string;
  action: () => void;
  icon: React.ReactNode;
}

export const BottomSidebarMobile = ({ className }: Props) => {
  const router = useRouter();
  const {
    modalsState: { handleModal },
  } = useProvider();

  const buttons: ButtonProps[] = [
    {
      label: "all",
      icon: <IoHomeOutline size={20} />,
      action: () => router.replace("/all"),
    },
    {
      label: "archived",
      action: () => router.replace("/archived"),
      icon: <IoArchiveOutline size={20} />,
    },
    {
      label: "search",
      action: () => handleModal("search_modal"),
      icon: <IoSearchOutline size={20} />,
    },
    {
      label: "tags",
      action: () => handleModal("tags_modal"),
      icon: <IoPricetagsOutline size={20} />,
    },
    {
      label: "settings",
      action: () => router.replace("/settings"),
      icon: <IoSettingsOutline size={20} />,
    },
    {
      label: "log out",
      action: () => {
        logout();
        signOut();
      },
      icon: <IoLogOutOutline size={20} />,
    },
  ];

  return (
    <aside
      className={`${className} fixed bottom-0 left-0 w-full bg-white border-t border-gray-200`}
    >
      <div className={`flex justify-center items-center`}>
        {buttons.map((button) => (
          <div key={button.label} className="w-full">
            <button
              onClick={button.action}
              className="flex flex-col items-center justify-start w-full py-5 text-center capitalize text-sm border-x border-gray-50 hover:bg-gray-50 transition-colors duration-150"
            >
              {button.icon}
              <span className="hidden sm:inline-block sm:pt-3">
                {button.label}
              </span>
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
};
