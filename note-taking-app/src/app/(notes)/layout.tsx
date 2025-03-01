import {
  Sidebar,
  Navbar,
  NavbarMobile,
  BottomSidebarMobile,
  SearchModal,
  TagsModal,
} from "@/components";
import { Provider } from "@/provider/provider";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function NotesLayout({ children }: Props) {
  return (
    <Provider>
      <Sidebar className="hidden lg:block" />
      <div className="lg:w-[calc(100%-300px)] lg:ml-[300px]">
        <Navbar className="hidden lg:flex" />
        <NavbarMobile className="lg:hidden" />
        {children}
        <BottomSidebarMobile className="lg:hidden" />
      </div>
      <TagsModal id={"tags_modal"} />
      <SearchModal id={"search_modal"} />
    </Provider>
  );
}
