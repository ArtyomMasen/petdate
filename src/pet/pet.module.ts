import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../user/user.entity";
import { Pet } from "./pet.entity";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "../auth/constants";
import { JwtStrategy } from "../auth/jwt.strategy";

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
    }),
    TypeOrmModule.forFeature([User, Pet]),
  ],
  providers: [PetService, JwtStrategy],
  controllers: [PetController],
  exports: [PetService]
})
export class PetModule {}
