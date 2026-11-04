import { z } from "zod";
export declare const ClientAddressSchema: z.ZodObject<
  {
    street: z.ZodString;
    city: z.ZodString;
    state: z.ZodString;
    zipCode: z.ZodString;
  },
  z.core.$strip
>;
export type CreateClientAddressSchemaInput = z.input<
  typeof ClientAddressSchema
>;
export type CreateClientAddressSchemaType = z.output<
  typeof ClientAddressSchema
>;
