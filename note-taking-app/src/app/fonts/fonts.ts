import { Kumbh_Sans, Pacifico } from "next/font/google";

export const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-kumbh-sans",
});

export const titleFont = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});
