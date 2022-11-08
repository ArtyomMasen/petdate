import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Put } from "@nestjs/common";
import { ApiResponse, } from '@nestjs/swagger';
import { UserService } from "../user/user.service";
import { User } from "../user/user.entity";

@Controller('auth')
export class AuthController {

  constructor(private readonly userService: UserService) {}

  @Get()
  async authUser(@Body() {login: login, password: password}): Promise<User> {
    var userLogin = await this.userService.getUserLogin(login);
    if (userLogin.password == password) {
      return userLogin;
    }

    if (userLogin == null) {
      throw new HttpException('Боевой вертолёт не найден :3', HttpStatus.NOT_FOUND)
    }

    throw new HttpException('Incorrect password', HttpStatus.UNAUTHORIZED)
  }
}
