import { User, Note } from "../interfaces";

interface SeedData {
  user: User;
  notes: Note[];
}

export const seedData: SeedData = {
  user: {
    username: "Fernando Ortiz",
    email: "fernando.correo@gmail.com",
    password: "123456",
    is_google_authenticated: false,
    google_oauth_id: null,
  },

  notes: [
    {
      id: "1",
      title: "React Permonce Optimization",
      archived: false,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      tags: ["dev", "react"],
    },

    {
      id: "2",
      title: "Japan Travel Planning",
      archived: false,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      tags: ["travel", "personal"],
    },

    {
      id: "3",
      title: "Favorite Pasta Recipes",
      archived: false,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      tags: ["cooking", "recipes"],
    },

    {
      id: "4",
      title: "Weekly Workout Plan",
      archived: false,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      tags: ["dev", "react"],
    },

    {
      id: "5",
      title: "Meal Prep Ideas",
      archived: false,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      tags: ["cooking", "health", "recipes"],
    },

    {
      id: "6",
      title: "Reading List",
      content: "Buy books",
      archived: false,
      tags: ["personal", "books"],
    },
  ],
};
