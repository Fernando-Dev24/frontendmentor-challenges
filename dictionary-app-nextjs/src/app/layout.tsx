import type { Metadata } from "next";

/* assets */
import "./globals.css";
import { Navbar } from "@/components";
import { FontProvider } from "@/providers";

export const metadata: Metadata = {
  title: "Dictionary App",
  description: "Search for your favorite words and its meaning 😎",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <FontProvider>
        <Navbar />
        {children}
      </FontProvider>
    </html>
  );
}
