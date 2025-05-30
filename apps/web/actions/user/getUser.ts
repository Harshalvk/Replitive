"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@repo/prisma/prismaClient";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function GetUser() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      redirect("/signin");
    }

    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
    });

    if (!user) throw new Error("User not found");

    return { success: true, user };
  } catch (error: any) {
    console.error("GetUser error", error);
    return { success: false, error: error.message };
  }
}
