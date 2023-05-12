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
