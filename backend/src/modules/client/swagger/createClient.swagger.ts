import { ApiBodyOptions } from '@nestjs/swagger';

export const CreateClientSwagger: ApiBodyOptions = {
  schema: {
    type: 'object',
    properties: {
      // Campos da client
    },
    required: [
      // Campos obrigatórios
    ],
  },
};
