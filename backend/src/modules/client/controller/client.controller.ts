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
  ) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova funcionalidade' })
  @ApiResponse({
    status: 201,
    description: 'Funcionalidade criada com sucesso',
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
  @ApiOperation({ summary: 'Busca todas as funcionalidades' })
  @ApiResponse({
    status: 200,
    description: 'Funcionalidades encontradas com sucesso',
  })
  async findAll(
    @Query(new ZodValidationPipe(QueryClientSchema))
    query: QueryClientSchemaType,
  ): Promise<FindAllClientSchemaReturnType> {
    return this.findAllClientUsecase.execute(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca uma funcionalidade pelo ID' })
  @ApiResponse({
    status: 200,
    description: 'Funcionalidade encontrada com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Funcionalidade não encontrada',
  })
  async findById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<FindByIdClientSchemaReturnType> {
    return this.findByIdClientUsecase.execute(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza uma funcionalidade pelo ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Funcionalidade atualizada com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos',
  })
  @ApiResponse({
    status: 404,
    description: 'Funcionalidade não encontrada',
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
    summary: 'Deleta uma funcionalidade pelo ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Funcionalidade deletada com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Funcionalidade não encontrada',
  })
  async delete(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<{ message: string }> {
    await this.deleteClientUsecase.execute(id);

    return {
      message: 'Funcionalidade deletada com sucesso',
    };
  }
}
