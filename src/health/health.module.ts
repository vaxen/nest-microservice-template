import { Module } from '@nestjs/common';
import { HealthController } from './controller/health.controller';
import { HealthService } from './service/health.service';


@Module({
  providers: [HealthService],
  controllers: [HealthController],
  exports: [HealthService],
})
export class HealthModule {}