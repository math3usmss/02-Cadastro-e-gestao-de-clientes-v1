import { Injectable } from '@nestjs/common';
import {
  CreateClientSchemaReturn,
  type CreateClientSchemaReturnType,
  type CreateClientSchemaType,
} from '@starter/shared';

import { ClientRepository } from '../repository/client.repository';

@Injectable()
export class CreateClientUsecase {
  constructor(private readonly clientRepository: ClientRepository) {}

  async execute(
    body: CreateClientSchemaType,
  ): Promise<CreateClientSchemaReturnType> {
    const client = await this.clientRepository.create(body);

    return CreateClientSchemaReturn.parse(client);
  }
}
