"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClientSchemaReturn = exports.CreateClientSchema = void 0;
const zod_1 = require("zod");
const client_schema_1 = require("./client.schema");
const clientAddress_schema_1 = require("./clientAddress.schema");
exports.CreateClientSchema = client_schema_1.ClientSchema.extend({
  clientAddresses: zod_1.z
    .array(clientAddress_schema_1.ClientAddressSchema)
    .default([]),
});
exports.CreateClientSchemaReturn = client_schema_1.ClientResponseSchema;
