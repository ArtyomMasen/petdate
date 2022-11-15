import { ApiProperty } from '@nestjs/swagger';

export class ResponseAuthDto {
  @ApiProperty()
  readonly accessToken: string;
}