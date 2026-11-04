"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientAddressSchema = void 0;
const zod_1 = require("zod");
exports.ClientAddressSchema = zod_1.z.object({
  street: zod_1.z.string().min(1, "Rua é obrigatória"),
  city: zod_1.z.string().min(1, "Cidade é obrigatória"),
  state: zod_1.z.string().length(2, "Estado deve ter 2 caracteres"),
  zipCode: zod_1.z.string().min(8, "CEP inválido"),
});
