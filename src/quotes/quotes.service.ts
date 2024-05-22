import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Quote } from './schemas/quote.schema';
import { Model } from 'mongoose';

@Injectable()
export class QuotesService {
    constructor(
        @InjectModel(Quote.name) private quoteModel: Model<Quote>
    ) {}

    // obtener cotizaciones de un asesor
    async findByAdvisor(query: any) {
        const startDate = new Date(`${query.year}-01-01T00:00:00Z`);
        const endDate = new Date(`${query.year}-12-31T23:59:59Z`);
        return this.quoteModel.find({
            advisor: query.advisor ,
            $or: [
                { updatedAt: { $gte: startDate, $lte: endDate } },
                { state: 'C' }
            ]

        }).exec();
    }

    async findOne(value:string, query: any) {
        const data = await this.quoteModel.find({
            [query.key]: value
        }).exec();
    
        return query.filter ? data.map(item => item[query.filter]).flat() : data;
    }

    async findByYear() {
        return 'cotizaciones anuales y pendientes';
    }

    // crear una cotizacion
    async create(quote: any) {
        const createdQuote = new this.quoteModel(quote);
        return createdQuote.save();
    }

    async update(quote: any) {
        return 'actualizar';
    }

    async delete() {
        return 'eliminar'
    }
}
