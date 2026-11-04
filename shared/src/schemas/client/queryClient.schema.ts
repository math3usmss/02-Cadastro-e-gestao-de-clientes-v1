import { z } from "zod";

import { PaginationQuerySchema } from "../../common/paginationQuery.schema";

// import { PaginationQuerySchema } from "../../common/paginationQuery.schema";

export const QueryClientSchema = PaginationQuerySchema;

export type QueryClientSchemaType = z.infer<typeof QueryClientSchema>;
