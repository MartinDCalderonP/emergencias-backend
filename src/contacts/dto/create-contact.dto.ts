import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateDocumentDto } from 'src/documents/dto/create-document.dto';
import { CreatePhoneDto } from 'src/phones/dto/create-phone.dto';
import { CreateAddressDto } from 'src/addresses/dto/create-address.dto';

export class CreateContactDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  lastName: string;

  @ApiProperty({ type: () => CreateDocumentDto, isArray: true })
  document: CreateDocumentDto[];

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  age: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @ApiProperty({ type: () => CreatePhoneDto, isArray: true })
  phones: CreatePhoneDto[];

  @ApiProperty({ type: () => CreateAddressDto, isArray: true })
  addresses: CreateAddressDto[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  documentId: string;
}
