import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "../items/Item";
import { User } from "src/users/User";

@Entity()
export class Shopping{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User)
    @JoinColumn({ name: "user_id", referencedColumnName: "id" })
    userId:User;

}