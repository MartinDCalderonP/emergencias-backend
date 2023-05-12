import { ApiProperty } from '@nestjs/swagger';

export class CreateDocumentDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  number: string;

  @ApiProperty()
  contactId: string;
}

export class CreatePhoneDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  number: string;

  @ApiProperty()
  contactId: string;
}

export class CreateAddressDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  number: string;

  @ApiProperty()
  city: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty()
  contactId: string;
}

export class CreateContactDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty({ type: () => CreateDocumentDto })
  document: CreateDocumentDto;

  @ApiProperty()
  age: number;

  @ApiProperty()
  email: string;

  @ApiProperty({ type: () => CreatePhoneDto, isArray: true })
  phones: CreatePhoneDto[];

  @ApiProperty({ type: () => CreateAddressDto, isArray: true })
  addresses: CreateAddressDto[];

  @ApiProperty()
  documentId: string;
}
