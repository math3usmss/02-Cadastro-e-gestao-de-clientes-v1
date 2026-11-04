import { z } from "zod";
export declare const FindByIdClientSchemaReturn: z.ZodObject<
  {
    name: z.ZodString;
    email: z.ZodString;
    CPF: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    CNPJ: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    phone: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    id: z.ZodString;
    clientAddresses: z.ZodOptional<
      z.ZodArray<
        z.ZodObject<
          {
            street: z.ZodString;
            city: z.ZodString;
            state: z.ZodString;
            zipCode: z.ZodString;
            id: z.ZodString;
          },
          z.core.$strip
        >
      >
    >;
  },
  z.core.$strip
>;
export type FindByIdClientSchemaReturnType = z.infer<
  typeof FindByIdClientSchemaReturn
>;
