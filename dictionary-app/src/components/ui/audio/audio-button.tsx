"use client";

import { useRef } from "react";
import { BsPlay } from "react-icons/bs";

interface Props {
  src: string;
  className?: React.HTMLAttributes<HTMLButtonElement>["className"];
}

export const AudioButton = ({ src, className }: Props) => {
  /* ref */
  const audioRef = useRef<HTMLAudioElement>(null);

  /* functions */
  const playAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.play();
  };

  return (
    <>
      <button className={className} onClick={playAudio}>
        <BsPlay size={50} className="text-indigo-500" />
      </button>
      <audio ref={audioRef}>
        <source src={src} typeof="audio/mp3" />
        Your browser does not support audio
      </audio>
    </>
  );
};
