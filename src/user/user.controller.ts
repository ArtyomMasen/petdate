import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Put } from "@nestjs/common";
import { ApiResponse, } from '@nestjs/swagger';
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";
import { User } from "./user.entity";

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return await this.userService.getAll()
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'User ID',
    type: User,
  })
  async getOne(@Param('id') id: string): Promise<User> {
    return await this.userService.getOneUser(id);
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    if (await this.userService.checkUser(createUserDto.login, createUserDto.email)) {
      throw new HttpException('User Already Exist', HttpStatus.BAD_REQUEST)
    }
    return await this.userService.createUser(createUserDto);
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userService.updateUser(id, updateUserDto)
  }

  @Delete(':id')
  async removeUser(@Param('id') id: string): Promise<string> {
    return await this.userService.removeUser(id)
  }
}