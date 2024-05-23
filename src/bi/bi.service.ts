import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quote } from 'src/quotes/schemas/quote.schema';

@Injectable()
export class BiService {
    constructor(
        @InjectModel(Quote.name) private quoteModel: Model<Quote>
    ) {}

    async getQuotes(year: string) {
        const startDate = new Date(`${year}-01-01T00:00:00Z`);
        const endDate = new Date(`${year}-12-31T23:59:59Z`);
        return this.quoteModel.find(
            { updatedAt: { $gte: startDate, $lte: endDate } }
        ).exec();
    }

    async getServices(year: string) {
        const startDate = new Date(`${year}-01-01T00:00:00Z`);
        const endDate = new Date(`${year}-12-31T23:59:59Z`);

        const data = await this.quoteModel.find(
            { updatedAt: { $gte: startDate, $lte: endDate } }
        ).exec();

        const getServices = data.flatMap(dt => 
            dt.services.map(service => ({
                ...service,
                N_offert: dt.N_offert,
                advisor: dt.advisor,
                disc: dt.disc,
                createdAt: dt
            }))
        )

        return getServices;
    }
}
