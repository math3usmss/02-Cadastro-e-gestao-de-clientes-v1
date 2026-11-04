import { Injectable } from '@nestjs/common';

import { ClientRepository } from '../repository/client.repository';

@Injectable()
export class DeleteClientUsecase {
  constructor(private readonly clientRepository: ClientRepository) {}

  async execute(id: string): Promise<void> {
    await this.clientRepository.delete(id);
  }
}
