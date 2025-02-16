import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <figure className="block mx-auto">
        <Image
          src={"/404-not-found.svg"}
          alt="404 not found"
          width={350}
          height={350}
        />
      </figure>
      <div className="my-5 text-center">
        <p className="text-2xl font-semibold">
          Word not found, use search bar instead
        </p>

        <Link
          href={"/"}
          className="block w-fit mt-5 mx-auto py-2 px-4 rounded shadow-sm bg-indigo-500 text-white transition-colors duration-150 hover:bg-indigo-600"
        >
          Go to home
        </Link>
      </div>
    </div>
  );
}
