import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserType } from "./dtos/userType";


@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true,
      })
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    userType:UserType
}