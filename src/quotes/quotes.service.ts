import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Quote } from './schemas/quote.schema';
import { Model } from 'mongoose';

@Injectable()
export class QuotesService {
    constructor(
        @InjectModel(Quote.name) private quoteModel: Model<Quote>
    ) {}

    async create(quote: any) {
        const createdQuote = new this.quoteModel(quote);
        return createdQuote.save();
    }

    
}
