import Image from "next/image";

export const EmptyNotes = () => {
  return (
    <div className="text-center text-gray-400">
      <Image
        src={"/illustrations/no-data.svg"}
        alt="No notes yet"
        width={150}
        height={150}
        priority
        className="block mx-auto"
      />
      No notes yet
    </div>
  );
};
