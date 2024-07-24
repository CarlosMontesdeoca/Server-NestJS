import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { QuoteModule } from './quote/quote.module';
import { QuotesModule } from './quotes/quotes.module';
import { BiModule } from './bi/bi.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://127.0.0.1:27017/operaciones'),
    MongooseModule.forRoot('mongodb+srv://Administrador:AdminSistemas%40@precitrol.3tkjgah.mongodb.net/operaciones?retryWrites=true&w=majority'),
    QuotesModule,
    BiModule
  ],
})
export class AppModule {}
