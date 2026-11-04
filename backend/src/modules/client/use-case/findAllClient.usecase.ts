import { Injectable } from '@nestjs/common';
import {
  FindAllClientSchemaReturn,
  type FindAllClientSchemaReturnType,
  type QueryClientSchemaType,
} from '@starter/shared';

import { ClientRepository } from '../repository/client.repository';

@Injectable()
export class FindAllClientUsecase {
  constructor(private readonly clientRepository: ClientRepository) {}

  async execute(
    query: QueryClientSchemaType,
  ): Promise<FindAllClientSchemaReturnType> {
    const result = await this.clientRepository.findAll(query);

    return FindAllClientSchemaReturn.parse(result);
  }
}
