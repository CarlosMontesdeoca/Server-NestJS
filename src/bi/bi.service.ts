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

        let resp = [];

        data.forEach(dt => {
            dt.services.forEach( serv => {
                let temp = {
                    offert: dt.N_offert,
                    advisor: dt.advisor,
                    mov_cost: serv.mov_cost,
                    cost: serv.cost,
                    cant: serv.cant,
                    disc: dt.disc,
                    cat: serv.cat,
                    service: serv.service,
                    createdAt: (dt as any).createdAt,
                    updatedAt: (dt as any).updatedAt
                }
                resp.push(temp)
            })
        });
        return resp;
    }
}
