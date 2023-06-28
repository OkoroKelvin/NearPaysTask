import { IsOptional } from "class-validator";
import { Category } from "src/items/Category";

export class UpdateDto{
    @IsOptional()
    item:string;
    @IsOptional()
    category:Category;
}