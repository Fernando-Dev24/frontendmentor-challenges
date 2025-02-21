import { ModalProps } from "@/interfaces";
import { Modal } from "./modal";
import { IoPricetagsOutline } from "react-icons/io5";
import { BtnCloseModal } from "./btn-close-modal";

const tags = [
  { name: "cooking" },
  { name: "dev" },
  { name: "fitness" },
  { name: "health" },
  { name: "personal" },
  { name: "react" },
  { name: "recipes" },
  { name: "shopping" },
  { name: "travel" },
  { name: "typescript" },
];

export const TagsModal = ({ id }: ModalProps) => {
  return (
    <Modal id={id} className="relative lg:hidden">
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[500px] overflow-y-auto scrollbar mx-auto py-10 pb-20 px-10 rounded-t-md bg-white">
        <h4 className="mb-5 font-medium text-gray-600">Filter notes by tag</h4>

        {tags.map((item) => (
          <button
            key={item.name}
            className="w-full btn flex items-center text-left"
          >
            <IoPricetagsOutline size={20} className="icon" />
            {item.name}
          </button>
        ))}

        <BtnCloseModal id={id} />
      </div>
    </Modal>
  );
};
