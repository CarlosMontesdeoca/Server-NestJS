import { IsNotEmpty, IsString, IsEmail, Min, IsNumber, IsBoolean } from "class-validator";

export class CreateQuoteDto {

    @IsString()
    @IsNotEmpty()
    reference: string;

    @IsString()
    @IsNotEmpty()
    advisor: string; 

    @IsString()
    @IsNotEmpty()
    phone_adv: string;  

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email_adv: string;

    @IsString()
    // @IsNotEmpty()
    ruc: string; 

    @IsString()
    @IsNotEmpty()
    client: string;

    @IsNumber()
    @IsNotEmpty()
    id_plant: number;

    @IsString()
    @IsNotEmpty()
    plant: string; 

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsNumber()
    @IsNotEmpty()
    id_contact: number;

    @IsString()
    @IsNotEmpty()
    contact: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string; 

    @IsString()
    @IsNotEmpty()
    phone: string;
    
    balances?: [];

    weigths?: [];

    @IsNotEmpty()
    services: [];

    products?: [];

    comments?:  [];

    // @IsString()
    stock: string;

    @IsString()
    @IsNotEmpty()
    pay: string;

    @IsNumber()
    disc?: number;
 
    // @IsNumber()
    // @IsNotEmpty()
    // doc: number;

    @IsBoolean()
    pmp?: boolean;
}