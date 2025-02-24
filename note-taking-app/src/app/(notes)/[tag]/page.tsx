import { Notes } from "@/components";
import { seedData } from "@/seed/seed-data";

interface Props {
  params: Promise<{
    tag: string;
  }>;
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const { notes } = seedData;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr]">
      <Notes notes={notes} />
      <div className="hidden lg:block" />
      {tag}
    </div>
  );
}
