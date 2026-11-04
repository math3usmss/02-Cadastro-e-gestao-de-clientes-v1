import { z } from "zod";

export const ClientSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  CPF: z.string().min(1),
  CNPJ: z.string().optional().nullable(),
  phone: z.string().min(1),
});

export const ClientResponseSchema = ClientSchema.extend({
  id: z.uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
