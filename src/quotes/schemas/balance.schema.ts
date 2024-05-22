import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ _id: false })
export class Balance {
    @Prop({required: true})
    key: number;
    
    @Prop({required: true})
    descBl: string; 
    
    @Prop({required: true})
    ident: string;
    
    @Prop({required: true})
    tip: string;
    
    @Prop({required: true})
    marc: string;
    
    @Prop({required: true})
    modl: string;
    
    @Prop({required: true})
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