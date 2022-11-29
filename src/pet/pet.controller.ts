import { Body, Controller, Delete, Get, Param, Post, Req, UnauthorizedException, UseGuards } from "@nestjs/common";
import { PetService } from "./pet.service";
import { Pet } from "./pet.entity";
import { CreatePetDto } from "./dto/create-pet.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get()
  async getAll(): Promise<Pet[]> {
    return await this.petService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post('/register-pet')
  async createPet(@Req() req: any, @Body() createPetDto: CreatePetDto): Promise<Pet> {
    const userId = req.user.userId;
    if (!userId) {
      throw new UnauthorizedException();
    }
    createPetDto = {...createPetDto, user: { id: userId }};
    const pet = await this.petService.createPet(createPetDto);

    return this.petService.findOnePet(userId, pet.pet_id)
  }
  // async createPet(@Body() createPetDto: CreatePetDto): Promise<Pet> {
  //   //TODO: Достань JWT чтобы записать id
  //   return await this.petService.createPet(new DbPetDto())
  // }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async removePet(@Param('id') pet_id: string): Promise<string> {
    return await this.petService.removePet(pet_id)
  }
}



