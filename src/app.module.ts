import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { QuoteModule } from './quote/quote.module';
import { QuotesModule } from './quotes/quotes.module';
import { BiModule } from './bi/bi.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://127.0.0.1:27017/operaciones'),
    // MongooseModule.forRoot('mongodb+srv://Administrador:temporal123@precitrol.3tkjgah.mongodb.net/operaciones?retryWrites=true&w=majority'),
    MongooseModule.forRoot('mongodb+srv://Administrador:<password>@precitrol.3tkjgah.mongodb.net/?retryWrites=true&w=majority&appName=precitrol'),
    QuotesModule,
    BiModule
  ],
})
export class AppModule {}
