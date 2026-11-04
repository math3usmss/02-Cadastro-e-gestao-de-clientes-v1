"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientSchema = exports.DocumentTypeEnum = void 0;
const zod_1 = require("zod");
const paginationQuery_schema_1 = require("../../common/paginationQuery.schema");
exports.DocumentTypeEnum = zod_1.z.enum(["CPF", "CNPJ"]);
exports.QueryClientSchema =
  paginationQuery_schema_1.PaginationQuerySchema.extend({
    searchQuery: zod_1.z.string().optional(),
    documentType: exports.DocumentTypeEnum.optional(),
  });
