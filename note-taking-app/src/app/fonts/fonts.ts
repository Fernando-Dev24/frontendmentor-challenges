import { Kumbh_Sans, Montserrat_Alternates } from "next/font/google";

export const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-kumbh-sans",
});

export const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat-alternates",
});
