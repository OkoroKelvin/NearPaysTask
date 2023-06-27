import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserType } from "./dtos/userType";
import { Exclude } from "class-transformer";


@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true,
      })
    email: string;

    @Exclude()
    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    userType:UserType
}