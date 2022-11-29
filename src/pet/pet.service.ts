import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Pet } from "./pet.entity";
import { CreatePetDto } from "./dto/create-pet.dto";
import { DbPetDto } from "./dto/db-pet.dto";

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private petRepository: Repository<Pet>
  ) {}

  async getAll(): Promise<Pet[]> {
    return await this.petRepository.find();
  }

  async createPet(petDto: DbPetDto): Promise<Pet> {
    return await this.petRepository.save( {...petDto})
  }

  async removePet(pet_id: string): Promise<string> {
    await this.petRepository.delete({pet_id})
    return pet_id;
  }
}
