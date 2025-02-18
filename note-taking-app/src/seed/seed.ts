import prisma from "../lib/prisma";
import { seedData } from "../seed/seed-data";
import bcrypt from "bcryptjs";

async function init() {
  // Eliminar registros de usuarios y notas
  if (process.env.NODE_ENV === "production") return;

  // Borrar registros de la base de datos
  await prisma.user_notes.deleteMany();
  await prisma.note_edits.deleteMany();
  await prisma.note_tags.deleteMany();
  await prisma.users.deleteMany();
  await prisma.notes.deleteMany();
  await prisma.tags.deleteMany();

  // Ingresar registros de prueba
  const { password, ...rest } = seedData.user;

  // Salt contraseña
  const passwordHash = bcrypt.hashSync(password);

  await prisma.users.create({
    data: {
      ...rest,
      password: passwordHash,
    },
  });

  console.log("Seed ejecutado correctamente");
}

(() => init())();
