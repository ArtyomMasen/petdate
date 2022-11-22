import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from "class-validator";

@Entity()
export class User {
  @ApiProperty({example: 1, description: 'Unique ID'})
  @PrimaryGeneratedColumn('increment')
  id: string;

  @ApiProperty({example: 'Example123', description: 'Write your login'})
  @Column('varchar')
  login: string;

  @ApiProperty({example: '123321qwe', description: 'Write your password'})
  @Column('varchar')
  password: string;

  @ApiProperty({example: 'example@example.com', description: 'Write your email'})
  @Column()
  @IsEmail()
  email: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  surname: string;

  @Column('varchar')
  interests: string;

  @Column('boolean')
  notifications: boolean;

  @Column('boolean')
  is_online: boolean;

  // @OneToMany(() => Pet, pet => pet.user)
  // pets: Pet;
}
