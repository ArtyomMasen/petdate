import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from "./user/user.entity";
import { PetModule } from './pet/pet.module';
import { Pet } from "./pet/pet.entity";

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
        "entities": [User, Pet],
        "synchronize": true
      }
    ),
    PetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
