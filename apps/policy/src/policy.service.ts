import { Injectable } from '@nestjs/common';

@Injectable()
export class PolicyService {
  getHello(): string {
    return 'Hello World!';
  }

  fetchAllPolicyFromDb(): string[] {
    return ['policy 1', 'policy 2'];
  }
}
