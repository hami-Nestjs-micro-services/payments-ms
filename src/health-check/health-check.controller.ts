import { Controller, Get } from '@nestjs/common';

@Controller('')
export class HealthCheckController {

    @Get()
    healthCheck() {
        return 'Client Payments is up and running!!';
    }
}
