import { Controller, Get } from '@nestjs/common';
import { HealthCheckService } from '../service/healthCheck.service';

@Controller('healthcheck')
export class HealthCheckController {
  constructor(private readonly healthcheckService: HealthCheckService) {}

  @Get()
  async check(): Promise<boolean> {
    return this.healthcheckService.isHealthy();
  }
}