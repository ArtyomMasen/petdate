import { ApiProperty } from "@nestjs/swagger";
import { IdDto } from "../../_common/id.dto";

export class CreatePetDto {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly gender: number;

  @ApiProperty()
  readonly breed: number;

  @ApiProperty()
  readonly kind_of_animal: number;

  @ApiProperty()
  readonly breed_certificate: string;

  @ApiProperty()
  readonly description: string;

  @ApiProperty({type: () => IdDto})
  readonly user: IdDto;
}