import { Injectable, NotFoundException } from '@nestjs/common';
import {
  FindByIdClientSchemaReturn,
  type FindByIdClientSchemaReturnType,
} from '@starter/shared';

import { ClientRepository } from '../repository/client.repository';

@Injectable()
export class FindByIdClientUsecase {
  constructor(private readonly clientRepository: ClientRepository) {}

  async execute(id: string): Promise<FindByIdClientSchemaReturnType> {
    const client = await this.clientRepository.findById(id);

    if (!client) {
      throw new NotFoundException('Funcionalidade não encontrada');
    }

    return FindByIdClientSchemaReturn.parse(client);
  }
}
