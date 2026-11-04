import { z } from "zod";

import { ClientResponseSchema } from "./client.schema";
import { ClientAddressSchema } from "./clientAddress.schema";

export const FindByIdClientSchemaReturn = ClientResponseSchema.extend({
  id: z.string(),
  clientAddresses: z
    .array(ClientAddressSchema.extend({ id: z.string().uuid() }))
    .optional(),
});

export type FindByIdClientSchemaReturnType = z.infer<
  typeof FindByIdClientSchemaReturn
>;
