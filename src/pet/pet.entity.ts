import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";

@Entity()
export class Pet {
  @PrimaryGeneratedColumn('increment')
  pet_id: string;

  @Column('varchar')
  login: string;

  @Column('integer')
  gender: number;

  @Column('integer')
  breed: number;

  @Column('integer')
  kind_of_animal: number;

  @Column('varchar')
  breed_certificate: string;

  @Column('varchar')
  description: string;

  @ManyToOne(type => User, user => user.pets)
  user: User;

}