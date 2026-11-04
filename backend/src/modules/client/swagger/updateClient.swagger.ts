import { ApiBodyOptions } from '@nestjs/swagger';

export const UpdateClientSwagger: ApiBodyOptions = {
  schema: {
    type: 'object',
    properties: {
      // Campos atualizáveis da client
    },
  },
};
