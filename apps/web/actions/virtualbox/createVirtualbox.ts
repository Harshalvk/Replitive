"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@repo/prisma/prismaClient";
import { createVirutalboxForm } from "@repo/validator/validator";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { z } from "zod";

export async function CreateVirtualbox(
  formData: z.infer<typeof createVirutalboxForm>
) {
  try {
    const data = createVirutalboxForm.safeParse(formData);

    if (!data.success) throw new Error("Invalid Inputs");

    const { name, type, visibility } = data.data;

    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) throw new Error("User not found");

    const virtualbox = await prisma.virtualBox.create({
      data: {
        name,
        type,
        visibility,
        userId: session.user.id,
      },
    });

    if (!virtualbox) throw new Error("Virtualbox not created");

    revalidatePath("/dashboard");
    return { success: true, virtualbox };
  } catch (error: any) {
    console.error("Virtualbox creation error", error.message);
    return { success: false, error: "Virtualbox not created" };
  }
}
