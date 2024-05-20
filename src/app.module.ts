import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { QuoteModule } from './quote/quote.module';
import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost/nest'),
    QuotesModule
  ],
})
export class AppModule {}
