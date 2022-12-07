import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { AppDto } from './shared/types/app.type';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  async getHello(): Promise<AppDto> {
    const response = await this.appService.getHello();
    return response;
  }
}