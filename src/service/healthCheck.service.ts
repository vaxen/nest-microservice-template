import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthCheckService {
  async isHealthy(): Promise<boolean> {
    // Perform the healthcheck here, and return a boolean indicating
    // whether the service is healthy or not

    return true;
  }
}