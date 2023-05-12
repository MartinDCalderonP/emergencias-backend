import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateAddressDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  street: string;

  @IsNumber()
  @IsNotEmpty()
  @MaxLength(5)
  @ApiProperty()
  number: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  city: string;

  @IsString()
  @ApiProperty({ required: false })
  description: string;

  contactId: string;
}
