import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ _id: false })
export class Weigth {
    
    @Prop({ required: true})
    key: number;
    
    @Prop()
    ident: string;
    
    @Prop({ required: true})
    cls: string;
    
    @Prop({ required: true})
    mass: string;
    
    @Prop({ required: true})
    dens: string;
}

export const WeigthSchema = SchemaFactory.createForClass(Weigth);