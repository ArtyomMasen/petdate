import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user/user.entity";

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(
      {
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "postgres",
        "password": "123321",
        "database": "postgres",
        "entities": [User],
        "synchronize": true
      }
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
