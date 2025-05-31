"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@repo/prisma/prismaClient";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function GetUserVirtualBox() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      redirect("/signin");
    }

    const virtualboxs = await prisma.virtualBox.findMany({
      where: {
        userId: session.user.id,
      },
    });

    if (!virtualboxs) {
      throw new Error("Virtual box for user not found");
    }

    return { success: true, virtualboxs };
  } catch (error: any) {
    console.error("GetUserVirtualBox", error);
    return { success: false, error: error.message };
  }
}
