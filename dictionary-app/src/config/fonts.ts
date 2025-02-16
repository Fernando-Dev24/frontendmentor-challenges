import { Merriweather, Poppins, Ubuntu_Mono, Borel } from "next/font/google";

export const serifFont = Merriweather({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const sansFont = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const monospaceFont = Ubuntu_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const partOfSpeechFont = Borel({
  variable: "--font-part-of-speech",
  subsets: ["latin"],
  weight: ["400"],
});
