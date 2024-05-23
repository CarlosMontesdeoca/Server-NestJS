import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Quote, QuoteSchema } from 'src/quotes/schemas/quote.schema';
import { BiController } from './bi.controller';
import { BiService } from './bi.service';

@Module({
    imports: [MongooseModule.forFeature([
        { name: Quote.name, schema: QuoteSchema}
    ])],
    controllers: [BiController],
    providers: [BiService]
})
export class BiModule {}