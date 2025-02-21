"use client";

import { useProvider } from "@/hooks/useProvider";
import { ModalProps } from "@/interfaces";
import clsx from "clsx";
import { IoCloseCircleOutline } from "react-icons/io5";

interface Props extends ModalProps {
  isRightSide?: boolean;
}

export const BtnCloseModal = ({ id, isRightSide = true }: Props) => {
  const {
    modalsState: { handleModal },
  } = useProvider();

  return (
    <button
      className={clsx("absolute top-5", isRightSide ? "right-5" : "left-5")}
      onClick={() => handleModal(id)}
    >
      <IoCloseCircleOutline size={25} className="hover:text-black/70" />
    </button>
  );
};
