import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  CreateClientSchema,
  type CreateClientSchemaReturnType,
  type CreateClientSchemaType,
  type FindAllClientSchemaReturnType,
  type FindByIdClientSchemaReturnType,
  QueryClientSchema,
  type QueryClientSchemaType,
  UpdateClientSchema,
  type UpdateClientSchemaReturnType,
  type UpdateClientSchemaType,
} from '@starter/shared';

import { ZodValidationPipe } from '../../../common/pipes/zod-validation.pipe';
import { CreateClientSwagger, UpdateClientSwagger } from '../swagger';
import {
  CreateClientUsecase,
  DeleteClientUsecase,
  FindAllClientUsecase,
  FindByIdClientUsecase,
  StatsClientUsecase,
  StatsClientUsecaseReturnType,
  UpdateClientUsecase,
} from '../use-case';

@ApiTags('clients')
@Controller('client')
export class ClientController {
  constructor(
    private readonly createClientUsecase: CreateClientUsecase,
    private readonly findAllClientUsecase: FindAllClientUsecase,
    private readonly findByIdClientUsecase: FindByIdClientUsecase,
    private readonly updateClientUsecase: UpdateClientUsecase,
    private readonly deleteClientUsecase: DeleteClientUsecase,
    private readonly statsClientUsecase: StatsClientUsecase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo cliente' })
  @ApiResponse({
    status: 201,
    description: 'Cliente criado com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos',
  })
  @ApiBody(CreateClientSwagger)
  async create(
    @Body(new ZodValidationPipe(CreateClientSchema))
    body: CreateClientSchemaType,
  ): Promise<CreateClientSchemaReturnType> {
    try {
      return this.createClientUsecase.execute(body);
    } catch (error) {
      console.error('Error creating client:', error);
      throw error;
    }
  }

  @Get()
  @ApiOperation({ summary: 'Busca todos os clientes' })
  @ApiResponse({
    status: 200,
    description: 'Clientes encontrados com sucesso',
  })
  async findAll(
    @Query(new ZodValidationPipe(QueryClientSchema))
    query: QueryClientSchemaType,
  ): Promise<FindAllClientSchemaReturnType> {
    return this.findAllClientUsecase.execute(query);
  }

  @Get('stats')
  @ApiOperation({ summary: 'Estatísticas dos clientes' })
  @ApiResponse({
    status: 200,
    description: 'Estatísticas obtidas com sucesso',
  })
  async stats(): Promise<StatsClientUsecaseReturnType> {
    return this.statsClientUsecase.execute();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um cliente pelo ID' })
  @ApiResponse({
    status: 200,
    description: 'Cliente encontrado com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Cliente não encontrado',
  })
  async findById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<FindByIdClientSchemaReturnType> {
    return this.findByIdClientUsecase.execute(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza um cliente pelo ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Cliente atualizado com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos',
  })
  @ApiResponse({
    status: 404,
    description: 'Cliente não encontrado',
  })
  @ApiBody(UpdateClientSwagger)
  async update(
    @Body(new ZodValidationPipe(UpdateClientSchema))
    body: UpdateClientSchemaType,
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<UpdateClientSchemaReturnType> {
    return this.updateClientUsecase.execute(body, id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deleta um cliente pelo ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Cliente deletado com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Cliente não encontrado',
  })
  async delete(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<{ message: string }> {
    await this.deleteClientUsecase.execute(id);

    return {
      message: 'Cliente deletado com sucesso',
    };
  }
}
