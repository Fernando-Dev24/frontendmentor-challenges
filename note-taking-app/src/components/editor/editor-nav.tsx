"use client";

import { useRouter } from "next/navigation";
import {
  IoArchiveOutline,
  IoChevronBackOutline,
  IoTrashBinOutline,
} from "react-icons/io5";

export const EditorNav = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <nav className="flex justify-between items-center mb-5 pb-3 border-b border-gray-200">
      <button
        onClick={goBack}
        className="flex items-center text-blue-600 hover:text-blue-500"
      >
        <IoChevronBackOutline size={20} />
        Go Back
      </button>

      <div className="flex space-x-5">
        <button className="hover:text-red-600">
          <IoTrashBinOutline size={20} />
        </button>

        <button className="hover:text-blue-600">
          <IoArchiveOutline size={20} />
        </button>

        <button onClick={goBack} className="text-red-600">
          Cancel
        </button>

        <button className="py-1 px-2 rounded-md bg-blue-600 text-white hover:bg-blue-500">
          Save Note
        </button>
      </div>
    </nav>
  );
};
