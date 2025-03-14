import { ModalProps } from "@/interfaces";
import { Modal } from "./modal";
import { BtnCloseModal } from "./btn-close-modal";
import { SearchNoteForm } from "../form/search-note-form";

export const SearchModal = ({ id }: ModalProps) => {
  return (
    <Modal id={id} className="relative lg:hidden">
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[90%] mx-auto py-10 pb-20 px-5 rounded-t-md bg-white">
        <SearchNoteForm />
        <BtnCloseModal id={id} />
      </div>
    </Modal>
  );
};
