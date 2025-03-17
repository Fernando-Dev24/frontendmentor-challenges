import { getNotesByUser } from "@/actions";
import { Notes } from "@/components";

export default async function AllNotesPage() {
  const { notes } = await getNotesByUser(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr]">
      <Notes notes={notes} />
      <div className="hidden lg:block" />
    </div>
  );
}
