import { Sidebar, Navbar } from "@/components";

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Sidebar />
      <div className="w-[calc(100%-300px)] ml-[300px]">
        <Navbar />
        {children}
      </div>
    </section>
  );
}
