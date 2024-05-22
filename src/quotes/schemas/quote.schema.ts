import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Balance, BalanceSchema } from "./balance.schema";
import { Weigth, WeigthSchema } from "./weigth.schema";
import { Service, ServiceSchema } from "./service.schema";

export enum QuoteStatus {
    cot = 'C',
    apr = 'A',
    desc = 'I'
}

@Schema({timestamps: true})
export class Quote {
    @Prop({ required: true, unique: true})
    N_offert: string;

    @Prop({ required: true}) 
    reference: string;

    @Prop({ required: true})
    advisor: string; 

    @Prop({ required: true})
    phone_adv: string;  

    @Prop({ required: true})
    email_adv: string;

    @Prop({ required: true})
    ruc: string; 

    @Prop({ required: true})
    client: string;

    @Prop({ required: true})
    id_plant: number;

    @Prop({ required: true})
    plant: string; 

    @Prop({ required: true})
    address: string;

    @Prop({ required: true})
    id_contact: number;

    @Prop({ required: true})
    contact: string;

    @Prop({ required: true})
    email: string; 

    @Prop({ required: true})
    phone: string;

    @Prop({ type: [BalanceSchema] })
    balances: Balance[];

    @Prop({ type: [WeigthSchema] })
    weigths: Weigth[];
    
    @Prop({ type: [ServiceSchema] })
    services: Service[];
    
    products: [];
    
    @Prop()
    comments: [];

    @Prop()
    stock: string;

    @Prop({ required: true})
    pay: string;

    @Prop({ default: 0})
    disc: number;

    @Prop({ default: 15})
    validity: number;

    @Prop({ validity: 3})
    doc: number;

    @Prop({ default: false})
    pmp: boolean;

    @Prop({ default: QuoteStatus.cot})
    state: QuoteStatus;

    @Prop({ default: 1})
    version: number;
}

export const QuoteSchema = SchemaFactory.createForClass(Quote);