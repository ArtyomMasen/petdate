import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getOneUser(id: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async createUser(userDto: CreateUserDto): Promise<User> {
    return await this.userRepository.save({ ...userDto });
  }

  async removeUser(id: string): Promise<string> {
    await this.userRepository.delete({ id });
    return id;
  }

  async updateUser(id: string, userDto: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, userDto);
    return await this.getOneUser(id);
  }

  async getUserLogin(login: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        login: login,
      },
    });
  }

  async checkUser(login: string, email: string): Promise<User> {
    return await this.userRepository.findOne({
      where: [{ login: login }, { email: email }],
    });
  }
}
