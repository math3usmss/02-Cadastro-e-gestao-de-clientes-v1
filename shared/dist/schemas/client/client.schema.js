"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientResponseSchema = exports.ClientSchema = void 0;
const zod_1 = require("zod");
exports.ClientSchema = zod_1.z.object({
  name: zod_1.z.string().min(1),
  email: zod_1.z.string().email(),
  CPF: zod_1.z.string().optional().nullable(),
  CNPJ: zod_1.z.string().optional().nullable(),
  phone: zod_1.z.string().min(1),
});
exports.ClientResponseSchema = exports.ClientSchema.extend({
  id: zod_1.z.uuid(),
  createdAt: zod_1.z.date(),
  updatedAt: zod_1.z.date(),
});
