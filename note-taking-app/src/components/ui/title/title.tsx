import { montserratAlternates } from "@/app/fonts";

interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <h2
      className={`${montserratAlternates.className} text-2xl font-medium antialiased`}
    >
      {title}
    </h2>
  );
};
