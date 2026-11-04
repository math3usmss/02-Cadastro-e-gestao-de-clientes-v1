import { z } from "zod";
export declare const DocumentTypeEnum: z.ZodEnum<{
  CPF: "CPF";
  CNPJ: "CNPJ";
}>;
export declare const QueryClientSchema: z.ZodObject<
  {
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    searchQuery: z.ZodOptional<z.ZodString>;
    documentType: z.ZodOptional<
      z.ZodEnum<{
        CPF: "CPF";
        CNPJ: "CNPJ";
      }>
    >;
  },
  z.core.$strip
>;
export type QueryClientSchemaType = z.infer<typeof QueryClientSchema>;
