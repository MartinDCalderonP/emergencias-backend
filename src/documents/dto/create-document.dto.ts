import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateDocumentDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  type: string;

  @IsNumber()
  @IsNotEmpty()
  @MaxLength(9)
  @ApiProperty()
  number: string;

  contactId: string;
}
