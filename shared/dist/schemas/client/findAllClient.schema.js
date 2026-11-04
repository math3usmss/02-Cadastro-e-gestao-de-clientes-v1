"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllClientSchemaReturn = void 0;
const zod_1 = require("zod");
const client_schema_1 = require("./client.schema");
exports.FindAllClientSchemaReturn = zod_1.z.object({
  clients: zod_1.z.array(client_schema_1.ClientResponseSchema),
  total: zod_1.z.number().int().nonnegative(),
  page: zod_1.z.number().int().min(1),
  limit: zod_1.z.number().int().positive(),
  totalPages: zod_1.z.number().int().nonnegative(),
});
