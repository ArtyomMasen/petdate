import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, SelectQueryBuilder } from "typeorm";
import { Pet } from "./pet.entity";
import { CreatePetDto } from "./dto/create-pet.dto";

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private petRepository: Repository<Pet>
  ) {}

  async getAll(): Promise<Pet[]> {
    return await this.petRepository.find();
  }

  private getPetQuery(userId: string): SelectQueryBuilder<Pet> {
    return this.petRepository.createQueryBuilder('pet')
      .leftJoin('pet.user', 'user', `user.id = ${userId}`);
  }

  async findOnePet(userId: string, id: string): Promise<Pet> {
    const response = await this.getPetQuery(userId)
      .where(`user.id = ${userId} AND pet.id = ${id}`)
      .getOne();
    if(!response) {
      throw new NotFoundException();
    }
    return response;
  }

  async createPet(petDto: CreatePetDto, token: string): Promise<Pet> {
    const userId = getUserIdByToken(token);
    return await this.petRepository.save( {...petDto})
  }

  async removePet(pet_id: string): Promise<string> {
    await this.petRepository.delete({pet_id})
    return pet_id;
  }
}
