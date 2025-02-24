import { NoteEditor, EditorNav } from "@/components";
import { IoPricetagsOutline } from "react-icons/io5";

export default async function NewNotePage() {
  return (
    <section className="hidden lg:block lg:py-10 lg:px-5">
      {/* NAVBAR */}
      <EditorNav />

      {/* EDIT NOTE */}
      <article>
        {/* TITLE */}
        {/* FORM TITLE */}

        {/* TAGS */}
        <div>
          <p>
            <IoPricetagsOutline size={20} />
            Tags
          </p>
          {/* FORM TAGS */}
        </div>

        {/* NOTE CONTENT */}
        <NoteEditor editorState={null} />
      </article>
    </section>
  );
}
