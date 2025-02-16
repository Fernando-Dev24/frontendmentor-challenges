"use server";

import { RandomWord } from "@/interfaces";

export const getRandomWord = async (): Promise<RandomWord> => {
  try {
    const res = await fetch("https://random-word-api.herokuapp.com/word").then(
      (res) => res.json()
    );

    return {
      ok: true,
      message: "",
      word: res[0],
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Error when try to get a random word 🤔",
      word: null,
    };
  }
};
