import { Injectable, Logger } from '@nestjs/common';

export type HealthCheck = {healthCheck: string;msg: string}
@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): HealthCheck {
    this.logger.log("Inside getHello controller");
    return {healthCheck: "OK", msg: "Hello From nest microservice demo"};
  }
}
