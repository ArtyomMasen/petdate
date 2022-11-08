import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @ApiProperty({example: 1, description: 'this is ID maaaan'})
  @PrimaryGeneratedColumn()
  id: string;

  @ApiProperty({example: 'Example123', description: 'this is ID maaaan'})
  @Column()
  login: string;
  @Column()
  password: string;
  @Column()
  email: string;
}
