import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { PetService } from "./pet.service";
import { Pet } from "./pet.entity";
import { CreatePetDto } from "./dto/create-pet.dto";
import { DbPetDto } from "./dto/db-pet.dto";

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get()
  async getAll(): Promise<Pet[]> {
    return await this.petService.getAll();
  }

  @Post('/register-pet')
  async createPet(@Body() createPetDto: CreatePetDto): Promise<Pet> {
    //TODO: Достань JWT чтобы записать id
    return await this.petService.createPet(DbPetDto(createPetDto, jwtId))
  }

  @Delete()
  async removePet(@Param('id') pet_id: string): Promise<string> {
    return await this.petService.removePet(pet_id)
  }
}



