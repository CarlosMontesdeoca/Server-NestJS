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

        const filter: any = {
            $or: [
                { updatedAt: { $gte: startDate, $lte: endDate } },
                { state: 'C' }
            ]
        }
        query.advisor && (filter.advisor = query.advisor);
        return this.quoteModel.find(filter,
            '_id N_offert reference client plant createdAt updatedAt state'
        ).sort({ updatedAt: -1}).exec();
    }

    async findOne(value:string, query: any) {
        const data = await this.quoteModel.findOne({
            [query.key]: value
        }).exec();
    
        if (query.filter) {
            let temp = {}
            query.filter.split(',').forEach(k  => {
                temp[k] = data[k] ?? 'not found'
            });
            return temp
        }else {
            return data
        };
    }

    async findOneServices(value:string, query: any) {
        const data = await this.quoteModel.findOne({
            [query.key]: value
        }).exec();
    
        return [data.disc, data.services];
        // return query.filter ? data.map(item => item[query.filter]).flat() : data;
    }

    async findByYear() {
        return 'cotizaciones anuales y pendientes';
    }

    // crear una cotizacion
    async create(quote: any) {
        const now = new Date();
        const count = await this.quoteModel.countDocuments({
            advisor: quote.advisor,
            N_offert: { $regex: new RegExp(`${now.getFullYear()}`) },
            pmp: quote.pmp ? true : false
        }).exec();
        const offert = `${quote.cod}-${(quote.pmp ? 'PMP-' : '') + quote.loc + now.getFullYear()}-${(count + 1).toString()
            .padStart(3, "0")}`
        quote.N_offert = offert;
        return new this.quoteModel(quote).save();
    }

    async update(id: string, quote: any) {
        return this.quoteModel.findByIdAndUpdate(id, 
            { 
                $set: quote,
                $inc: { version: 1 }
            }
        ).exec();
    }

    async move(id: string, quote: any) {
        return this.quoteModel.findByIdAndUpdate(id, quote).exec();
    }

    async delete() {
        return 'eliminar'
    }
}
