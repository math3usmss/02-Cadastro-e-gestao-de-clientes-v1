"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClientSchemaReturn = exports.UpdateClientSchema = void 0;
const zod_1 = require("zod");
const createClient_schema_1 = require("./createClient.schema");
const client_schema_1 = require("./client.schema");
const clientAddress_schema_1 = require("./clientAddress.schema");
exports.UpdateClientSchema =
  createClient_schema_1.CreateClientSchema.partial().extend({
    clientAddresses: zod_1.z
      .array(
        clientAddress_schema_1.ClientAddressSchema.extend({
          id: zod_1.z.uuid().optional(),
        }),
      )
      .optional(),
  });
exports.UpdateClientSchemaReturn = client_schema_1.ClientResponseSchema;
