import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import type { Request, Response } from 'express';

import { Prisma } from '../../generated/prisma/client';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status: number = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let errors: unknown;

    if (exception instanceof HttpException) {
      status = exception.getStatus();

      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else if (exceptionResponse && typeof exceptionResponse === 'object') {
        if ('message' in exceptionResponse) {
          const errorMessage = exceptionResponse.message;

          if (typeof errorMessage === 'string') {
            message = errorMessage;
          } else if (Array.isArray(errorMessage)) {
            message = errorMessage.join(', ');
          }
        }

        if ('errors' in exceptionResponse && status < 500) {
          errors = exceptionResponse.errors;
        }
      }
    } else if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      switch (exception.code) {
        case 'P2025':
          status = HttpStatus.NOT_FOUND;
          message = 'Registro não encontrado';
          break;

        case 'P2002':
          status = HttpStatus.CONFLICT;
          message = 'Já existe um registro com esses dados';
          this.logger.warn(`Prisma P2002: ${JSON.stringify(exception.meta)}`);
          break;

        case 'P2003':
          status = HttpStatus.CONFLICT;
          message = 'Operação inválida: registro relacionado';
          break;
      }
    }

    if (status >= 500) {
      this.logger.error(
        `${request.method} ${request.url} - ${message}`,
        exception instanceof Error ? exception.stack : String(exception),
      );
    }

    response.status(status).json({
      statusCode: status,
      message,
      ...(errors !== undefined && { errors }),
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
