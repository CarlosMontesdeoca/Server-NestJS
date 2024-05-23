import { Body, Controller, Get, Param, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { CreateQuoteDto } from './dto/createQuoteDto.dto';
import { UpdateQuoteDto } from './dto/updateQuoteDto.dto';

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

  @Put('/:id')
  async updateQuote(@Param('id') id: string, @Body() updateQuote: UpdateQuoteDto ){
    return this.quoteService.update(id, updateQuote);
  }
}
