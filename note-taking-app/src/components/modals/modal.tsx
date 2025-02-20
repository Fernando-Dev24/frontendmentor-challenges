"use client";

import ReactModal from "react-modal";
import { ModalsState } from "@/interfaces";
import { useProvider } from "@/hooks/useProvider";

interface Props {
  id: keyof ModalsState["modals"];
  children: React.ReactNode;
  className?: string;
}

export const Modal = ({ id, className, children }: Props) => {
  const {
    modalsState: { modals, handleModal },
    appEl,
  } = useProvider();

  return (
    <ReactModal
      appElement={appEl.current!}
      isOpen={modals[id]}
      onRequestClose={() => handleModal(id)}
      closeTimeoutMS={200}
      overlayClassName={"modal-background"}
      className={"h-fit"}
    >
      <div className={className}>{children}</div>
    </ReactModal>
  );
};
