import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/insurance/api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/getAllPolicy')
  getAllPolicyGateway() {
    return this.appService.getAllPolicyFromMs();
  }
}
