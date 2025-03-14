import { auth } from "@/auth.config";
import {
  Sidebar,
  Navbar,
  NavbarMobile,
  BottomSidebarMobile,
  SearchModal,
  TagsModal,
} from "@/components";
import { Provider } from "@/provider/provider";
import { redirect } from "next/navigation";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default async function NotesLayout({ children }: Props) {
  const session = await auth();
  if (!session) redirect("/auth/login");

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
