"use server";

import { auth } from "@/auth.config";
import { Note } from "@/interfaces";
import prisma from "@/lib/prisma";
import z from "zod";

const validatorSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(3),
  tags: z.array(z.string().min(3)),
  archived: z.boolean(),
  content: z.coerce
    .string()
    .min(3)
    .transform((val) => JSON.stringify(val)),
});

export const onSaveNote = async (note: Note) => {
  const session = await auth();
  if (!session)
    return {
      ok: false,
      message: "User not authenticated",
    };

  // done: validate corrects tags, title, and content
  const noteParsed = validatorSchema.safeParse(note);
  if (!noteParsed.success) {
    console.log(noteParsed.error.message);
    return {
      ok: false,
      message: "Invalid note",
    };
  }

  // Update or create note
  const { id, tags, ...rest } = noteParsed.data;

  // Eliminar los duplicados de las tags
  const uniqueTags = Array.from(new Set(tags));

  try {
    if (id) {
      // update note
      console.log("Updating...");
    } else {
      await prisma.notes.create({
        data: {
          ...rest,
          user_id: session.user.id,
          tags: {
            set: uniqueTags as string[],
          },
        },
      });
    }

    return {
      ok: true,
      message: "Note saved",
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Error saving note",
    };
  }
};
