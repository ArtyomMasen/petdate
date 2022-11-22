import { ApiProperty } from "@nestjs/swagger";

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
}