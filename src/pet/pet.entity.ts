import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pet {
  @PrimaryGeneratedColumn('increment')
  id: string;

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
}