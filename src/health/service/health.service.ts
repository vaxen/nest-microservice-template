import { Injectable } from '@nestjs/common';
import { HealthCheckDto } from 'src/shared/types/app.type';

@Injectable()
export class HealthService {
  async isHealthy(): Promise<HealthCheckDto> {
    // Perform the healthcheck here, and return a boolean indicating
    // whether the service is healthy or not

    return {statusCode: 200, isHealthy: true};
  }
}