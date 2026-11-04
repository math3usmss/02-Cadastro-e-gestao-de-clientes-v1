import { z } from "zod";
export declare const UpdateClientSchema: z.ZodObject<
  {
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    CPF: z.ZodOptional<z.ZodString>;
    CNPJ: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    phone: z.ZodOptional<z.ZodString>;
    clientAddresses: z.ZodOptional<
      z.ZodArray<
        z.ZodObject<
          {
            street: z.ZodString;
            city: z.ZodString;
            state: z.ZodString;
            zipCode: z.ZodString;
            id: z.ZodOptional<z.ZodUUID>;
          },
          z.core.$strip
        >
      >
    >;
  },
  z.core.$strip
>;
export type UpdateClientSchemaType = z.infer<typeof UpdateClientSchema>;
export declare const UpdateClientSchemaReturn: z.ZodObject<
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
export type UpdateClientSchemaReturnType = z.infer<
  typeof UpdateClientSchemaReturn
>;
