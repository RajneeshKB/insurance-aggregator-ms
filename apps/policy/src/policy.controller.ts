import { Controller, Get } from '@nestjs/common';
import { PolicyService } from './policy.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class PolicyController {
  constructor(private readonly policyService: PolicyService) {}

  @Get()
  getHello(): string {
    return this.policyService.getHello();
  }

  @MessagePattern({ cmd: 'get-all-policy' })
  getAllPolicy() {
    return this.policyService.fetchAllPolicyFromDb();
  }
}
