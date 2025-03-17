"use server";

import { signIn } from "@/auth.config";
import { AuthError } from "next-auth";

interface CredentialsValues {
  email: string;
  password: string;
}

export const login = async ({ email, password }: CredentialsValues) => {
  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return {
      ok: true,
      message: "Login successful",
    };
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        ok: false,
        message: "Your credentials are incorrect",
      };
    }

    console.log(error);

    return {
      ok: false,
      message: "Something went wrong, please try again in a few minutes",
    };
  }
};
