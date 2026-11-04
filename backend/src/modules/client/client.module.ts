import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';
import { ClientController } from './controller/client.controller';
import { ClientRepository } from './repository/client.repository';
import {
  CreateClientUsecase,
  DeleteClientUsecase,
  FindAllClientUsecase,
  FindByIdClientUsecase,
  StatsClientUsecase,
  UpdateClientUsecase,
} from './use-case';

@Module({
  imports: [AuthModule],
  controllers: [ClientController],
  providers: [
    ClientRepository,
    CreateClientUsecase,
    FindAllClientUsecase,
    FindByIdClientUsecase,
    UpdateClientUsecase,
    DeleteClientUsecase,
    StatsClientUsecase,
  ],
})
export class ClientModule {}
