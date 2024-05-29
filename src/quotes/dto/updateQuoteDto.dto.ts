import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class UpdateQuoteDto {

    @IsString()
    @IsNotEmpty()
    reference: string;
    
    balances?: [];

    weigths?: [];

    @IsNotEmpty()
    services: [];

    products: [];

    comments:  [];

    @IsString()
    @IsNotEmpty()
    stock: string;

    @IsString()
    @IsNotEmpty()
    pay: string;

    @IsNumber()
    disc?: number;
 
    @IsNumber()
    @IsNotEmpty()
    doc: number;
}