import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { CreateQuoteDto } from './dto/createQuoteDto.dto';

@Controller('quotes')
export class QuotesController { 
  constructor(private quoteService: QuotesService) {}

  @Get()
  getQuotesByAdvisor() {
    return this.quoteService.findByAdvisor();
  }

  @Post()
  async createQuote(@Body(new ValidationPipe()) createQuote: CreateQuoteDto) {
    return this.quoteService.create(createQuote);
  }
}
