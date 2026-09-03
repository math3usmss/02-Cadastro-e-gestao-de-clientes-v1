"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleSchema = void 0;
const zod_1 = require("zod");
exports.ExampleSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    age: zod_1.z.number().int().positive(),
});
