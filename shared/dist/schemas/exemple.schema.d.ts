import { z } from "zod";
export declare const ExampleSchema: z.ZodObject<{
    name: z.ZodString;
    age: z.ZodNumber;
}, z.core.$strip>;
export type Example = z.infer<typeof ExampleSchema>;
