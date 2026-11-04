import { Injectable } from '@nestjs/common';

export interface StatsClientUsecaseReturnType {
  total: number;
  totalCPF: number;
  totalCNPJ: number;
}

import { ClientRepository } from '../repository/client.repository';

@Injectable()
export class StatsClientUsecase {
  constructor(private readonly clientRepository: ClientRepository) {}

  async execute(): Promise<StatsClientUsecaseReturnType> {
    return this.clientRepository.statsClient();
  }
}
