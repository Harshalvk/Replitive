import { z } from "zod";

export const VirtualBoxType = ["REACT", "NODE"] as const;
export const VirtualBoxVisibility = ["PUBLIC", "PRIVATE"] as const;

export const createVirutalboxForm = z.object({
  name: z
    .string()
    .min(5, { message: "Name should be atleast 5 characters long" }),
  type: z.enum(VirtualBoxType),
  visibility: z.enum(VirtualBoxVisibility),
});
