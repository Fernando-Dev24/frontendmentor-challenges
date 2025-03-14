import { User, Note } from "../interfaces";

interface SeedData {
  user: User;
  notes: Note[];
}

export const seedData: SeedData = {
  user: {
    username: "Fernando Ortiz",
    email: "fernandodev.ortiz@gmail.com",
    password: "R3f3R2402",
  },

  notes: [
    {
      id: "1",
      title: "React Performance Optimization",
      archived: false,
      content: null,
      tags: ["dev", "react"],
    },

    {
      id: "2",
      title: "Japan Travel Planning",
      archived: false,
      content: null,
      tags: ["travel", "personal"],
    },

    {
      id: "3",
      title: "Favorite Pasta Recipes",
      archived: false,
      content: null,
      tags: ["cooking", "recipes"],
    },

    {
      id: "4",
      title: "Weekly Workout Plan",
      archived: false,
      content: null,
      tags: ["dev", "react"],
    },

    {
      id: "5",
      title: "Meal Prep Ideas",
      archived: false,
      content: null,
      tags: ["cooking", "health", "recipes"],
    },

    {
      id: "6",
      title: "Reading List",
      content: null,
      archived: false,
      tags: ["personal", "books"],
    },
  ],
};
