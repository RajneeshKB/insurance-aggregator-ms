import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class AppService {
  logger = new Logger();

  constructor(
    @Inject('POLICY_SERVICE') private readonly clientServicePolicy: ClientProxy,
  ) {
    try {
      this.clientServicePolicy.connect(); //lazy loaded method to connect to the microservice
    } catch (error) {
      this.logger.log(error);
    }
  }

  getHello(): string {
    return 'Hello World!';
  }

  getAllPolicyFromMs() {
    const startTs = Date.now();
    const pattern = { cmd: 'get_all_policy' };
    const payload = {};
    return this.clientServicePolicy
      .send(pattern, payload)
      .pipe(map((response) => ({ response, duration: Date.now() - startTs })));
  }
}
