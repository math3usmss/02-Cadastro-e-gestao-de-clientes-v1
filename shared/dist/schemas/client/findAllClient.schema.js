"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllClientSchemaReturn = void 0;
const zod_1 = require("zod");
const client_schema_1 = require("./client.schema");
const clientAddress_schema_1 = require("./clientAddress.schema");
exports.FindAllClientSchemaReturn = zod_1.z.object({
  clients: zod_1.z.array(
    client_schema_1.ClientResponseSchema.extend({
      clientAddresses: zod_1.z.array(
        clientAddress_schema_1.ClientAddressSchema.extend({
          id: zod_1.z.string().uuid(),
        }),
      ),
    }),
  ),
  total: zod_1.z.number().int().nonnegative(),
  page: zod_1.z.number().int().min(1),
  limit: zod_1.z.number().int().positive(),
  totalPages: zod_1.z.number().int().nonnegative(),
});
