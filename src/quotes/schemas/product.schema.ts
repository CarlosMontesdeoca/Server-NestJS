import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ _id: false })
export class Product {
    
    @Prop({ required: true})
    key: string;
    
    @Prop({ required: true})
    cat: string;
    
    @Prop({ required: true})
    cant: number;
    
    @Prop({ required: true})
    desc: string;
    
    @Prop({ required: true})
    cost: number;
    
    @Prop({ required: true})
    mov_cost: number;

    @Prop({ required: true})
    image: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);