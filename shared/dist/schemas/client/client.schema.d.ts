import { z } from "zod";
export declare const ClientSchema: z.ZodObject<
  {
    name: z.ZodString;
    email: z.ZodString;
    CPF: z.ZodString;
    CNPJ: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    phone: z.ZodString;
  },
  z.core.$strip
>;
export declare const ClientResponseSchema: z.ZodObject<
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
