import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(1).max(255),
  password: z.string().min(1).max(255),
  fullName: z.string().min(1).max(255),
  email: z.string().email(),
  phone: z.string().regex(/^0\d{9}$/),
  address: z.string().min(1).max(255),
});
