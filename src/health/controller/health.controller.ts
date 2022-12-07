import { Controller, Get } from '@nestjs/common';
import { HealthService } from '../service/health.service';
import { HealthCheckDto } from 'src/shared/types/app.type';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  async check(): Promise<HealthCheckDto> {
    return this.healthService.isHealthy();
  }
}