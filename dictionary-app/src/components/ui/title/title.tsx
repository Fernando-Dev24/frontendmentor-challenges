import { partOfSpeechFont } from "@/config";
import styles from './title.module.css';

interface Props {
  title: string;
}

export const Title = ({ title = "" }: Props) => {
  return (
    <div className={ styles.part_of_speech }>
      <p className={`${partOfSpeechFont.className} font-semibold text-2xl`}>
        {title}
      </p>
    </div>
  );
};
