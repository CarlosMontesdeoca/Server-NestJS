import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ _id: false })
export class Service {
    
    @Prop({ required: true})
    service_id: number;
    
    @Prop({ required: true})
    cant: number;
    
    @Prop({ required: true})
    disc: number;
    
    @Prop({ required: true})
    cat: string;
    
    @Prop({ required: true})
    service: string;
    
    @Prop({ required: true})
    cost: number;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);