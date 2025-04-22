import { z } from "zod";

export const createPostSchema = z.object({
  content: z.string().min(1, { message: "Content is required" }),
  title: z.string().min(1, { message: "Title is required" }),
});

export type CreatePostFormData = z.infer<typeof createPostSchema>;
