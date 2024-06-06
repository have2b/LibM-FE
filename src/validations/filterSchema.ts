import { z } from "zod";

export const filterSchema = z.object({
  searchTerm: z.string().min(1).max(255),
  orderBy: z.string().min(1).max(255),
});
