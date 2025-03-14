import NextAuth, { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import z from "zod";
import prisma from "./lib/prisma";
import bcrypt from "bcryptjs";

const protectedRoutes = ["/notes"];

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) return null;

        const { email, password } = parsedCredentials.data;

        // Buscar el correo
        const user = await prisma.users.findUnique({
          where: { email: email.toLowerCase() },
        });

        // Comparar credenciales
        if (!user) return null;
        if (!bcrypt.compareSync(password, user.password)) return null;

        // Regresar la informacion del usuario sin el password
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _, ...rest } = user;
        return rest;
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnProtectedRoute = protectedRoutes.includes(nextUrl.pathname);

      // Redirect users to login when they are not logged
      if (isOnProtectedRoute) {
        if (isLoggedIn) return true;
        return Response.redirect(new URL("/auth/login", nextUrl));
      }

      // Redirect users to login when they are not logged
      if (isLoggedIn) {
        if (nextUrl.pathname === "/auth/login") {
          return Response.redirect(new URL("/", nextUrl));
        }
      }

      return true;
    },
  },
};

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);
