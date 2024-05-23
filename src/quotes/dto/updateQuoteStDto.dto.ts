import { IsNotEmpty, IsString, Length } from "class-validator";

export enum QuoteStatus {
    cot = 'C',
    apr = 'A',
    desc = 'I'
}

export class UpdateQuoteStDto {
 
    @IsString()
    @IsNotEmpty()
    @Length(1)
    state: QuoteStatus;

}