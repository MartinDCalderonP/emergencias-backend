import { ApiProperty } from '@nestjs/swagger';

export class CreateDocumentDto {
  id: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  number: string;

  contactId: string;
}

export class CreatePhoneDto {
  id: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  number: string;

  contactId: string;
}

export class CreateAddressDto {
  id: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  number: string;

  @ApiProperty()
  city: string;

  @ApiProperty({ required: false })
  description: string;

  contactId: string;
}

export class CreateContactDto {
  id: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty({ type: () => CreateDocumentDto, isArray: true })
  document: CreateDocumentDto[];

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
