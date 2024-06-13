import { Controller, Get, Param, Query } from '@nestjs/common';
import { BiService } from './bi.service';

@Controller('bi')
export class BiController {
    constructor(private biService: BiService) {}

    @Get('/cotizaciones/:year')
    getQuotes(@Param('year') year: string) {
        return this.biService.getQuotes(year);
    }

    @Get('/servicios/:year')
    getServices(@Param('year') year: string) {
        return this.biService.getServices(year);
    }

    @Get('/servicios')
    getServicesFilter(@Query() query: any) {
        return this.biService.getServicesFilter(query);
    }
}
