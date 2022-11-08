import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @ApiProperty({example: 1, description: 'Unique ID'})
  @PrimaryGeneratedColumn()
  id: string;

  @ApiProperty({example: 'Example123', description: 'Write your login'})
  @Column()
  login: string;

  @ApiProperty({example: '123321qwe', description: 'Write your password'})
  @Column()
  password: string;

  @ApiProperty({example: 'example@example.com', description: 'Write your email'})
  @Column()
  email: string;
}
