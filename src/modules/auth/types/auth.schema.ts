import { z } from "zod";

export const signUpSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
