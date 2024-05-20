import { Controller, Get } from '@nestjs/common';

@Controller('quotes')
export class QuotesController { 

  @Get()
  getAllQuotes() {
    return 'ruta de cotizaciones'
  }
}
