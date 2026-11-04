import { z } from "zod";
export declare const QueryClientSchema: z.ZodObject<
  {
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
  },
  z.core.$strip
>;
export type QueryClientSchemaType = z.infer<typeof QueryClientSchema>;
