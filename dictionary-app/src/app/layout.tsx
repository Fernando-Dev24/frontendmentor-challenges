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
      <body className="bg-[#fff] text-[#171717] dark:bg-[#0a0a0a] dark:text-[#ededed] transition-colors duration-300">
        <Provider>
          <Navbar />
          <SearchBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
