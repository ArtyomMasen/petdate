import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly login: string;

  @ApiProperty()
  readonly password: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly surname: string;

  @ApiProperty()
  readonly interests: string;

  @ApiProperty()
  readonly notifications: boolean;

  @ApiProperty()
  readonly is_online: boolean;
}
