import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { PetService } from "./pet.service";
import { Pet } from "./pet.entity";
import { CreatePetDto } from "./dto/create-pet.dto";

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get()
  async getAll(): Promise<Pet[]> {
    return await this.petService.getAll();
  }

  @Post()
  async createPet(@Body() createPetDro: CreatePetDto): Promise<Pet> {
    return await this.petService.createPet(createPetDro)
  }

  @Delete()
  async removePet(@Param('id') id: string): Promise<string> {
    return await this.petService.removePet(id)
  }
}



