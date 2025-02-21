import { Note } from "@/interfaces";

interface Props {
  note: Note;
}

export const NoteItem = ({ note }: Props) => {
  return (
    <article className="flex space-y-3 flex-col items-start mb-5 py-5 px-3 rounded-t-md rounded-b border-b border-gray-100 transition-colors duration-150 hover:bg-gray-100">
      <h5 className="text-xl font-medium">{note.title}</h5>
      <div className="flex space-x-3 flex-wrap items-center">
        {note.tags.map((tag) => (
          <span key={tag} className="p-1 rounded-md bg-gray-300/50">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-400">29 Oct, 2024</p>
    </article>
  );
};
