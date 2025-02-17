import { notFound, redirect } from "next/navigation";
import { getRandomWord } from "@/actions";

export default async function Home() {
  const { ok, word } = await getRandomWord();

  if (!ok || !word) {
    return notFound();
  }

  redirect(`/${word}`);
}
