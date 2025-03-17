import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { kumbhSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Note Taking App",
  description:
    "A real-time collaborative note-taking app that allows multiple users to create, edit, and organize notes seamlessly. Users can tag notes, track edit history, and collaborate with teammates efficiently. Built with modern web technologies, the app ensures data synchronization and a smooth user experience across devices.\nIdeal for teams, students, and professionals who need a shared workspace for brainstorming, planning, and documentation. 💡✨",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kumbhSans.className} antialiased scrollbar`}>
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 3000,
          }}
        />
        {children}
      </body>
    </html>
  );
}
