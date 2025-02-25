import { NoteEditor, EditorNav } from "@/components";
import { IoAlarmOutline, IoPricetagsOutline } from "react-icons/io5";

export default async function NewNotePage() {
  return (
    <section className="lg:py-10 px-5">
      {/* NAVBAR */}
      <EditorNav />

      {/* EDIT NOTE */}
      <article>
        {/* TITLE */}
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
        <NoteEditor />
      </article>
    </section>
  );
}
