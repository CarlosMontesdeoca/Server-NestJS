import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { QuoteModule } from './quote/quote.module';
import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/operaciones'),
    QuotesModule
  ],
})
export class AppModule {}
