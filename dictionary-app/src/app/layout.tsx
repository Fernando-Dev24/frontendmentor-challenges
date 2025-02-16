import type { Metadata } from "next";

import { Provider } from "@/providers";
import { Navbar, SearchBar } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dictionary App",
  description: "Search for your favorite words and its meaning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <Navbar />
        <SearchBar />
        {children}
      </Provider>
    </html>
  );
}
