import { z } from "zod";
export declare const FindAllClientSchemaReturn: z.ZodObject<
  {
    clients: z.ZodArray<
      z.ZodObject<
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
      >
    >;
    total: z.ZodNumber;
    page: z.ZodNumber;
    limit: z.ZodNumber;
    totalPages: z.ZodNumber;
  },
  z.core.$strip
>;
export type FindAllClientSchemaReturnType = z.infer<
  typeof FindAllClientSchemaReturn
>;
