import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { User } from "./user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthController } from "../auth/auth.controller";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController, AuthController],
})
export class UserModule {}