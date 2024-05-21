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
    async findByAdvisor() {
        return this.quoteModel.find().exec();
    }

    async findByYear() {
        return 'cotizaciones anuales y pendientes';
    }

    async findById() {
        return 'cotizacion por id';
    }

    async findByOffert() {
        return 'cotizacion por numero de oferta';
    }

    // crear una cotizacion
    async create(quote: any) {
        const createdQuote = new this.quoteModel(quote);
        return createdQuote.save();
    }

    async getServicesByOffert() {
        return 'servicios de una oferta';
    }

    async update(quote: any) {
        return 'actualizar';
    }

    async delete() {
        return 'eliminar'
    }
}
