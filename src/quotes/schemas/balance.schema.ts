import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ _id: false })
export class Balance {
    @Prop()
    codPrc: string;

    @Prop()
    key: number;
    
    @Prop()
    descBl: string; 
    
    @Prop({required: true})
    ident: string;
    
    @Prop({default: 'N/A'})
    loc: string;

    @Prop({required: true})
    tip: string;
    
    @Prop({required: true})
    marc: string;
    
    @Prop({required: true})
    modl: string;
    
    @Prop({default: 'III'})
    cls: string;
    
    @Prop({required: true})
    ser: string;
    
    @Prop({required: true})
    uni: string;
    
    @Prop({required: true})
    maxCap: string;
    
    @Prop({required: true})
    usCap: string;
    
    @Prop({required: true})
    div_e: string;
    
    @Prop({required: true})
    div_d: string;
    
    @Prop({required: true})
    rang: string;
    
    @Prop({required: true})
    maxCap2: string;
    
    @Prop({required: true})
    usCap2: string;
    
    @Prop({required: true})
    div_e2: string;
    
    @Prop({required: true})
    div_d2: string;
    
    @Prop({required: true})
    rang2: string;
}

export const BalanceSchema = SchemaFactory.createForClass(Balance);