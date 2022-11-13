import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user/user.entity";
import { AuthModule } from "./auth/auth.module";
import { AuthService } from "./auth/auth.service";

@Module({
  imports: [
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot(
      {
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "postgres",
        "password": "postgres",
        "database": "postgres",
        "entities": [User],
        "synchronize": true
      }
    )
  ],
  controllers: [AppController,],
  providers: [AppService, AuthService],
})
export class AppModule {}