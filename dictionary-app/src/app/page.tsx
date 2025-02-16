import { redirect } from "next/navigation";
import { getWordDefinition, getRandomWord } from "@/actions";
import { Title, AudioButton } from "@/components";
import styles from "./word-definition.module.css";

export default async function Home() {
  const { ok, word } = await getRandomWord();

  if (!ok || !word) {
    redirect("/not-found");
  }

  const { ok: okDefinition, definition } = await getWordDefinition(word);
  if (!okDefinition || !definition) {
    redirect("/not-found");
  }

  return (
    <>
      <section className="my-10 flex justify-between items-center">
        <div>
          <h1 className="text-4xl sm:text-6xl font-bold capitalize">
            {definition.word}
          </h1>
          <span className="mt-1 text-indigo-500">
            {definition.phonetics[1]?.text}
          </span>
        </div>

        {definition.phonetics[1]?.audio && (
          <AudioButton
            src={definition.phonetics[1]?.audio}
            className="p-3 rounded-full bg-indigo-500/20 hover:bg-indigo-500/30 duration-150 transition-colors"
          />
        )}
      </section>

      {definition.meanings.map((item) => (
        <section key={item.partOfSpeech} className="mb-20">
          <Title title={item.partOfSpeech} />
          <p className={styles.section_title}>Meaning</p>

          <ul className={styles.meaning_list}>
            {item.definitions.map((definition, index) => (
              <li key={index}>
                <span>{definition.definition}</span>
              </li>
            ))}
          </ul>

          {/* render synonyms */}
          {item.synonyms.length > 0 && (
            <div className="flex items-center gap-5 my-5">
              <p>
                <span className={styles.section_title}>Synonyms</span>
                {item.synonyms.map((synonym, index) => (
                  <span key={index} className="text-indigo-500 font-bold ml-2">
                    {synonym}
                  </span>
                ))}
              </p>
            </div>
          )}

          {item.antonyms.length > 0 && (
            <div className="flex items-center gap-5 my-5">
              <p>
                <span className={styles.section_title}>Antonyms</span>
                {item.antonyms.map((antonyms, index) => (
                  <span key={index} className="text-indigo-500 font-bold ml-2">
                    {antonyms}
                  </span>
                ))}
              </p>
            </div>
          )}
        </section>
      ))}

      <section className="my-20 py-10 border-t border-gray-400">
        <p className={styles.section_title}>Source</p>

        {definition.sourceUrls.map((url, index) => (
          <a
            key={index}
            href={url}
            className="flex items-center text-sm underline"
          >
            {url}
          </a>
        ))}
      </section>
    </>
  );
}
