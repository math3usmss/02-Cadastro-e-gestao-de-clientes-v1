import { Injectable } from '@nestjs/common';
import {
  UpdateClientSchemaReturn,
  type UpdateClientSchemaReturnType,
  type UpdateClientSchemaType,
} from '@starter/shared';

import { ClientRepository } from '../repository/client.repository';

@Injectable()
export class UpdateClientUsecase {
  constructor(private readonly clientRepository: ClientRepository) {}

  async execute(
    body: UpdateClientSchemaType,
    id: string,
  ): Promise<UpdateClientSchemaReturnType> {
    const client = await this.clientRepository.update(body, id);

    return UpdateClientSchemaReturn.parse(client);
  }
}
