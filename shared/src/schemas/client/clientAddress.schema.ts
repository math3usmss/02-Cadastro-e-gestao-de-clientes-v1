import { z } from "zod";

export const ClientAddressSchema = z.object({
  street: z.string().min(1, "Rua é obrigatória"),
  city: z.string().min(1, "Cidade é obrigatória"),
  state: z.string().length(2, "Estado deve ter 2 caracteres"),
  zipCode: z.string().min(8, "CEP inválido"),
});

export type CreateClientAddressSchemaInput = z.input<
  typeof ClientAddressSchema
>;

export type CreateClientAddressSchemaType = z.output<
  typeof ClientAddressSchema
>;
