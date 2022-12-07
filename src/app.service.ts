import { Injectable, Logger } from '@nestjs/common';
import { AppDto } from './shared/types/app.type';
import * as config from 'config';
import { info } from '../node_modules/webpack/lib/dependencies/processExportInfo';
import { HealthService } from './health/service/health.service';

@Injectable()
export class AppService {
  
  constructor(
    private readonly healthService: HealthService
  ) {}
  

  async getHello(): Promise<AppDto> {
    const msg = `Hello From ${config.get("name")}`;
    const healthResponse =  await this.healthService.isHealthy();
    //this.logger.log(msg);
    return {statusCode: 200, msg,isHealthy: healthResponse.isHealthy};
  }
}