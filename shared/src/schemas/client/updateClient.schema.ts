import { z } from "zod";

import { CreateClientSchema } from "./createClient.schema";
import { ClientResponseSchema } from "./client.schema";
import { ClientAddressSchema } from "./clientAddress.schema";

export const UpdateClientSchema = CreateClientSchema.partial().extend({
  clientAddresses: z
    .array(
      ClientAddressSchema.extend({
        id: z.uuid().optional(),
      }),
    )
    .optional(),
});

export type UpdateClientSchemaType = z.infer<typeof UpdateClientSchema>;

export const UpdateClientSchemaReturn = ClientResponseSchema;

export type UpdateClientSchemaReturnType = z.infer<
  typeof UpdateClientSchemaReturn
>;
