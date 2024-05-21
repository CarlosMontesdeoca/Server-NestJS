import { IsNotEmpty, IsString } from "class-validator";

export class CreateQuoteDto {
    @IsNotEmpty()
    @IsString()
    N_offert: string;

    // @Prop({ required: true}) 
    reference: string;

    // @Prop({ required: true})
    advisor: string; 

    // @Prop({ required: true})
    phone_adv: string;  

    // @Prop({ required: true})
    email_adv: string;

    // @Prop({ required: true})
    ruc: string; 

    // @Prop({ required: true})
    client: string;

    // @Prop({ required: true})
    id_plant: number;

    // @Prop({ required: true})
    plant: string; 

    // @Prop({ required: true})
    address: string;

    // @Prop({ required: true})
    id_contact: number;

    // @Prop({ required: true})
    contact: string;

    // @Prop({ required: true})
    email: string; 

    // @Prop({ required: true})
    phone: string;
    
    // balances: ;
    // // weigths: ;
    // // services: ;
    // // products: ;
    // // comments: ;
    // // observations: ;

    // @Prop()
    stock: string;

    // @Prop({ required: true})
    pay: string;

    // @Prop({ default: 0})
    disc: number;

    // @Prop({ default: 15})
    validity: number;

    // @Prop({ validity: 3})
    doc: number;

    // @Prop({ default: false})
    pmp: boolean;

    // @Prop({ default: QuoteStatus.cot})

    // @Prop({ default: 1})
    version: number;
}