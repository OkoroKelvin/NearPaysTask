import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";
import { Shopping } from "../shopping/Shopping";



@Entity()
export class Item{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @ManyToOne(type => Shopping)
    @JoinColumn({ name: "shopping_id", referencedColumnName: "id" })
    shoppingId:Shopping;

    @Column()
    category:Category;

    constructor(name:string, category:Category) {
        this.name = name;
        this.category = category;
      }

    
}