import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "../items/Item";
import { User } from "src/users/User";
import { Category } from "src/items/Category";

@Entity()
export class Shopping{

    @PrimaryGeneratedColumn()
    id: number;

    // @JoinColumn({ name: "user_id", referencedColumnName: "id" })
    // userId:User;/ @ManyToOne(type => User)
    //

    @Column()
    userId:number;

    @Column()
    item:string;

    @Column()
    category:Category;

    constructor(id:number, item : string, category:Category){
        this.userId = id;
        this.item = item;
        this.category = category;
    }

}