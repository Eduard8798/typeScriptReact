import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'user@gmail.com' , description: 'email'})
    @IsString({message: 'must be string'})
    @IsEmail({},{message:'not correct email'})
    readonly email: string;
    @ApiProperty({example: '1234' , description: 'password'})
    @IsString({message: 'must be string'})
    @Length(4,16,{message: "must be min 4 and max 16"})
    readonly password: string;
}
