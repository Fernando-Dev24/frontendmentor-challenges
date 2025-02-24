import { IoPricetagsOutline } from "react-icons/io5";
import { NoteEditor, EditorNav } from "@/components";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditNotePage({ params }: Props) {
  const { id } = await params;

  return (
    <section className="hidden lg:block lg:py-10 lg:px-5">
      {/* NAVBAR */}
      <EditorNav />

      {/* EDIT NOTE */}
      <article>
        {/* TITLE */}
        <h4>Note id: {id}</h4>

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
