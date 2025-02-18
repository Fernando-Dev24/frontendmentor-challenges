import { User } from "../interfaces/user.interface";

interface SeedData {
  user: User;
}

export const seedData: SeedData = {
  user: {
    username: "Fernando Ortiz",
    email: "fernando.correo@gmail.com",
    password: "123456",
    is_google_authenticated: false,
    google_oauth_id: null,
  },
};
