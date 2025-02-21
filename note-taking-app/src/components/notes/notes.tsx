import { seedData } from "@/seed/seed-data";
import { EmptyNotes } from "./empty-notes";
import { NoteItem } from "./note-item";
import { IoAdd } from "react-icons/io5";

export const Notes = () => {
  const { notes } = seedData;

  return (
    <section className="py-10 px-5 border-r border-gray-200">
      {/* BUTTON */}
      <button className="w-full flex justify-center mb-10 py-3 items-center rounded-md bg-blue-600 text-white transition-colors duration-150 hover:bg-blue-700">
        <IoAdd size={20} className="mr-2" />
        Create New Note
      </button>

      {/* NOTES */}
      {notes.length >= 1 ? (
        notes.map((note) => <NoteItem key={note.id} note={note} />)
      ) : (
        <EmptyNotes />
      )}
    </section>
  );
};
