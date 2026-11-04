import { z } from "zod";

import { ClientResponseSchema } from "./client.schema";
import { ClientAddressSchema } from "./clientAddress.schema";

export const FindByIdClientSchemaReturn = ClientResponseSchema.extend({
  id: z.string(),
  clientAddresses: z.array(z.object(ClientAddressSchema)).optional(),
});

export type FindByIdClientSchemaReturnType = z.infer<
  typeof FindByIdClientSchemaReturn
>;
