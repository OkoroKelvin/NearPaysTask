import { IsEmail,IsString } from "@nestjs/class-validator";
import { UserType } from "./userType";

export class UserDto{
    @IsEmail()
    email: string;

    @IsString()
    password:string;

    @IsString()
    name:string;

    userType:UserType;
}