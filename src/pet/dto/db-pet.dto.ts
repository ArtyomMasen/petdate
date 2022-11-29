import { ApiProperty } from "@nestjs/swagger";
import { IdDto } from "../../_common/id.dto";
import { IsOptional } from "class-validator";
import { CreatePetDto } from "./create-pet.dto";

export class DbPetDto {
  @ApiProperty({type: () => CreatePetDto})
  readonly petDto: CreatePetDto;

  @ApiProperty({type: () => IdDto})
  readonly user: IdDto;
}
