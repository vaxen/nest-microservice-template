import { Module } from '@nestjs/common';
import { HealthCheckController } from './controller/healthCheck.controller';
import { HealthCheckService } from './service/healthCheck.service';

const isProd = process.env.NODE_ENV === 'production';

@Module({
  controllers: [HealthCheckController],
  providers: [HealthCheckService],
})
export class AppModule {}
