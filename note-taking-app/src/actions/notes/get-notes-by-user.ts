"use server";

import { auth } from "@/auth.config";
import prisma from "@/lib/prisma";

export const getNotesByUser = async (getArchived: boolean) => {
  const session = await auth();
  if (!session) {
    return {
      ok: false,
      message: "User not authenticated",
      notes: [],
    };
  }

  try {
    const notes = await prisma.notes.findMany({
      where: {
        user_id: session.user.id,
        archived: getArchived,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    if (!notes) {
      return {
        ok: false,
        message: "No notes found",
        notes: [],
      };
    }

    return {
      ok: true,
      notes: notes.map((item) => ({
        ...item,
        content: JSON.parse(item?.content || ""),
      })),
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Error getting notes",
      notes: [],
    };
  }
};
