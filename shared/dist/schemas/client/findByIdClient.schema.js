"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindByIdClientSchemaReturn = void 0;
const zod_1 = require("zod");
const client_schema_1 = require("./client.schema");
const clientAddress_schema_1 = require("./clientAddress.schema");
exports.FindByIdClientSchemaReturn =
  client_schema_1.ClientResponseSchema.extend({
    id: zod_1.z.string(),
    clientAddresses: zod_1.z
      .array(zod_1.z.object(clientAddress_schema_1.ClientAddressSchema))
      .optional(),
  });
