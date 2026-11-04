import { z } from "zod";
export declare const CreateClientSchema: z.ZodObject<
  {
    name: z.ZodString;
    email: z.ZodString;
    CPF: z.ZodString;
    CNPJ: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    phone: z.ZodString;
    clientAddresses: z.ZodDefault<
      z.ZodArray<
        z.ZodObject<
          {
            street: z.ZodString;
            city: z.ZodString;
            state: z.ZodString;
            zipCode: z.ZodString;
          },
          z.core.$strip
        >
      >
    >;
  },
  z.core.$strip
>;
export type CreateClientSchemaInput = z.input<typeof CreateClientSchema>;
export type CreateClientSchemaType = z.output<typeof CreateClientSchema>;
export declare const CreateClientSchemaReturn: z.ZodObject<
  {
    name: z.ZodString;
    email: z.ZodString;
    CPF: z.ZodString;
    CNPJ: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    phone: z.ZodString;
    id: z.ZodUUID;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  z.core.$strip
>;
export type CreateClientSchemaReturnType = z.infer<
  typeof CreateClientSchemaReturn
>;
