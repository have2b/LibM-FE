import { z } from "zod";

export const addCategorySchema = z.object({
  categoryName: z.string().min(1).max(255),
  description: z.string().min(1).max(500),
});

export const updateCategorySchema = z.object({
  categoryId: z.string().min(1).max(255),
  categoryName: z.string().min(1).max(255),
  description: z.string().min(1).max(500),
});
