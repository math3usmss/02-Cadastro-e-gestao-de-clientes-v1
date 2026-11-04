import { z } from "zod";

import { ClientSchema, ClientResponseSchema } from "./client.schema";
import { ClientAddressSchema } from "./clientAddress.schema";

export const CreateClientSchema = ClientSchema.extend({
  clientAddresses: z.array(ClientAddressSchema).default([]),
});

export type CreateClientSchemaInput = z.input<typeof CreateClientSchema>;

export type CreateClientSchemaType = z.output<typeof CreateClientSchema>;

export const CreateClientSchemaReturn = ClientResponseSchema;

export type CreateClientSchemaReturnType = z.infer<
  typeof CreateClientSchemaReturn
>;
