import { titleFont } from "@/app/fonts";

interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <h2 className={`${titleFont.className} text-2xl font-medium antialiased`}>
      {title}
    </h2>
  );
};
