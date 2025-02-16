"use server";

import { WordDefinitionResponse } from "@/interfaces";

export const getWordDefinition = async (
  word: string
): Promise<WordDefinitionResponse> => {
  try {
    const resp = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    ).then((resp) => resp.json());

    if (resp.resolution) {
      return {
        ok: false,
        message: "Word not found",
        definition: null,
      };
    }

    return {
      ok: true,
      message: "Word found",
      definition: resp[0],
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Error fetching word definition",
      definition: null,
    };
  }
};
