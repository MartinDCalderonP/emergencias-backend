import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreatePhoneDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  type: string;

  @IsNumber()
  @IsNotEmpty()
  @MaxLength(10)
  @ApiProperty()
  number: string;

  contactId: string;
}
