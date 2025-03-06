import { NoteEditorWrapper } from "@/components";

export default async function NewNotePage() {
  return (
    <section className="lg:py-10 px-5">
      {/* EDIT NOTE */}
      <NoteEditorWrapper note={null} />
    </section>
  );
}
