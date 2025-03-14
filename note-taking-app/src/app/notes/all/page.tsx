import { Notes } from "@/components";
import { seedData } from "@/seed/seed-data";

export default function AllNotesPage() {
  const { notes } = seedData;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr]">
      <Notes notes={notes} />
      <div className="hidden lg:block" />
    </div>
  );
}
