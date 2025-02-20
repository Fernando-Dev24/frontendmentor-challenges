import {
  Sidebar,
  Navbar,
  NavbarMobile,
  BottomSidebarMobile,
} from "@/components";
import { Provider } from "@/provider/provider";
import { SearchModal } from "../../components/modals/search-modal";

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <Sidebar className="hidden lg:block" />
      <div className="lg:w-[calc(100%-300px)] lg:ml-[300px]">
        <Navbar className="hidden lg:flex" />
        <NavbarMobile className="lg:hidden" />
        {children}
        <BottomSidebarMobile className="lg:hidden" />
      </div>
      <SearchModal id={"search_modal"} />
    </Provider>
  );
}
