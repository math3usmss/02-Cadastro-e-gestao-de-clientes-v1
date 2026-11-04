import { Injectable } from '@nestjs/common';
import {
  type CreateClientSchemaType,
  type QueryClientSchemaType,
  type UpdateClientSchemaType,
} from '@starter/shared';

import { PrismaService } from '../../../database/prisma/prisma.service';
import { Prisma } from '../../../generated/prisma/client';

@Injectable()
export class ClientRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: CreateClientSchemaType) {
    return this.prisma.client.create({
      data: {
        ...body,
        clientAddresses: { create: body.clientAddresses },
        CPF: body.CPF?.trim() || null,
        CNPJ: body.CNPJ?.trim() || null,
      },
      include: { clientAddresses: true },
    });
  }

  async findById(id: string) {
    return this.prisma.client.findUnique({
      where: { id },
      include: { clientAddresses: true },
    });
  }

  async findAll(query: QueryClientSchemaType) {
    const { page, searchQuery, documentType } = query;

    const limit = 5;
    const skip = (page - 1) * limit;

    const where: Prisma.ClientWhereInput = {
      ...(searchQuery && {
        OR: [
          {
            name: {
              contains: searchQuery,
              mode: 'insensitive',
            },
          },
          {
            email: {
              contains: searchQuery,
              mode: 'insensitive',
            },
          },
          {
            CPF: {
              contains: searchQuery,
              mode: 'insensitive',
            },
          },
          {
            CNPJ: {
              contains: searchQuery,
              mode: 'insensitive',
            },
          },
          {
            phone: {
              contains: searchQuery,
              mode: 'insensitive',
            },
          },
          {
            clientAddresses: {
              some: {
                OR: [
                  {
                    street: {
                      contains: searchQuery,
                      mode: 'insensitive',
                    },
                  },
                  {
                    city: {
                      contains: searchQuery,
                      mode: 'insensitive',
                    },
                  },
                  {
                    state: {
                      contains: searchQuery,
                      mode: 'insensitive',
                    },
                  },
                  {
                    zipCode: {
                      contains: searchQuery,
                      mode: 'insensitive',
                    },
                  },
                ],
              },
            },
          },
        ],
      }),

      ...(documentType === 'CPF' && {
        CPF: { not: null },
      }),

      ...(documentType === 'CNPJ' && {
        CNPJ: { not: null },
      }),
    };

    const [clients, total] = await Promise.all([
      this.prisma.client.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        where,
        include: {
          clientAddresses: true,
        },
      }),

      this.prisma.client.count({ where }),
    ]);

    return {
      clients,
      total,
      page,
      totalPages: Math.ceil(total / limit),
      limit,
    };
  }

  async statsClient() {
    const [total, totalCPF, totalCNPJ] = await this.prisma.$transaction([
      this.prisma.client.count(),

      this.prisma.client.count({
        where: {
          CPF: { not: '' },
        },
      }),

      this.prisma.client.count({
        where: {
          CNPJ: { not: '' },
        },
      }),
    ]);

    return { total, totalCPF, totalCNPJ };
  }

  async update(body: UpdateClientSchemaType, id: string) {
    const { clientAddresses, ...clientData } = body;

    const existingAddresses =
      clientAddresses?.filter((address) => address.id) ?? [];

    const newAddresses =
      clientAddresses?.filter((address) => !address.id) ?? [];

    return this.prisma.client.update({
      where: { id },
      data: {
        ...clientData,
        CPF: clientData.CPF?.trim() || null,
        CNPJ: clientData.CNPJ?.trim() || null,

        ...(clientAddresses !== undefined && {
          clientAddresses: {
            update: existingAddresses.map(({ id, ...data }) => ({
              where: { id: id! },
              data,
            })),

            create: newAddresses.map(({ id: _id, ...data }) => data),
          },
        }),
      },
      include: {
        clientAddresses: true,
      },
    });
  }
  async delete(id: string): Promise<void> {
    await this.prisma.client.delete({
      where: { id },
    });
  }
}
