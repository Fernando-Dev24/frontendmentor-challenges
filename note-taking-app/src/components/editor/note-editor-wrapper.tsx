"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  IoAlarmOutline,
  IoArchiveOutline,
  IoChevronBackOutline,
  IoPricetagsOutline,
  IoTrashBinOutline,
} from "react-icons/io5";
import { NoteEditor } from "./editor";
import { Note, Tag } from "@/interfaces";

interface Props {
  note: Note | null;
}

interface FormState {
  title: string;
  tags: Tag[];
}

export const NoteEditorWrapper = ({ note }: Props) => {
  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const goBack = () => {
    router.back();
  };

  const onSaveNote = (values: FormState) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSaveNote)}>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center mb-5 pb-3 border-b border-gray-200">
        <button
          onClick={goBack}
          type="button"
          className="flex items-center text-blue-600 hover:text-blue-500"
        >
          <IoChevronBackOutline size={20} />
          Go Back
        </button>

        <div className="flex space-x-5">
          <button className="hover:text-red-600" type="button">
            <IoTrashBinOutline size={20} />
          </button>

          <button className="hover:text-blue-600" type="button">
            <IoArchiveOutline size={20} />
          </button>

          <button onClick={goBack} className="text-red-600" type="button">
            Cancel
          </button>

          <button
            onClick={handleSubmit(onSaveNote)}
            type="submit"
            className="py-1 px-2 rounded-md bg-blue-600 text-white hover:bg-blue-500"
          >
            Save Note
          </button>
        </div>
      </nav>

      {/* FORM TITLE */}
      <h4 className="mb-5 font-semibold text-3xl">
        React Performance Optimization
      </h4>

      {/* TAGS */}
      <div className="grid grid-cols-[125px_1fr] gap-5 pb-10 border-b border-gray-100">
        <div className="w-max flex items-center text-gray-500">
          <IoPricetagsOutline size={20} className="mr-2" />
          Tags
        </div>
        {/* FORM TAGS */}
        <p>React, Dev</p>

        <div className="w-max flex items-center text-gray-500">
          <IoAlarmOutline size={20} className="mr-2" />
          Last Edited
        </div>

        {/* DATE */}
        <p>{new Date().toDateString()}</p>
      </div>

      {/* NOTE CONTENT */}
      <NoteEditor content={note?.content} />
    </form>
  );
};
