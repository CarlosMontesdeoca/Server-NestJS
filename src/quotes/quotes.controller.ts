import { Body, Controller, Get, Param, Post, Query, ValidationPipe } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { CreateQuoteDto } from './dto/createQuoteDto.dto';

@Controller('quotes')
export class QuotesController { 
  constructor(private quoteService: QuotesService) {}

  @Get()
  getQuotesByAdvisor(@Query() query: any ) {
    return this.quoteService.findByAdvisor(query);
  }

  @Get(':value')
  getQuote(@Param('value') value: string, @Query() query: any ) {
    return this.quoteService.findOne(value, query);
  }

  @Get(':value/services')
  getQuoteServices(@Param('value') value: string, @Query() query: any ) {
    return this.quoteService.findOneServices(value, query);
  }

  @Post()
  async createQuote(@Body(new ValidationPipe()) createQuote: CreateQuoteDto) {
    return this.quoteService.create(createQuote);
  }
}
