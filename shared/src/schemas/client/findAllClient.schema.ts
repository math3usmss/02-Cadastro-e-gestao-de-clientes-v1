import { z } from "zod";

import { ClientResponseSchema } from "./client.schema";

export const FindAllClientSchemaReturn = z.object({
  clients: z.array(ClientResponseSchema),
  total: z.number().int().nonnegative(),
  page: z.number().int().min(1),
  limit: z.number().int().positive(),
  totalPages: z.number().int().nonnegative(),
});

export type FindAllClientSchemaReturnType = z.infer<
  typeof FindAllClientSchemaReturn
>;
