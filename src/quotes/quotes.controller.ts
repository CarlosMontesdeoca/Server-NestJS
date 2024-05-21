import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController { 
  constructor(private quoteService: QuotesService) {}

  @Get()
  getAllQuotes() {
    return 'ruta de cotizaciones'
  }

  @Post()
  async createQuote(@Body() createQuote: any) {
    return createQuote;
  }
}
