import { z } from "zod";

import { PaginationQuerySchema } from "../../common/paginationQuery.schema";

export const DocumentTypeEnum = z.enum(["CPF", "CNPJ"]);

export const QueryClientSchema = PaginationQuerySchema.extend({
  searchQuery: z.string().optional(),
  documentType: DocumentTypeEnum.optional(),
});

export type QueryClientSchemaType = z.infer<typeof QueryClientSchema>;
