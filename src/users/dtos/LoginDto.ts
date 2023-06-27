import { IsEmail,IsString } from "@nestjs/class-validator";
import { UserType } from "./userType";

export class LoginDto{
    @IsEmail()
    email: string;

    @IsString()
    password:string;
}