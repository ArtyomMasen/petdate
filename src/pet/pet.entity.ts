import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";
import { plainToClass } from "class-transformer";

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

  static createFromObject<T>(object: T): Pet {
    return plainToClass(Pet, object);
  }

  @ManyToOne(() => User, user => user.pets, { eager: true })
  user: User;

}