import { ApiProperty } from '@nestjs/swagger';

class DocumentDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  number: string;

  @ApiProperty()
  contactId: string;
}

class PhoneDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  number: string;

  @ApiProperty()
  contactId: string;
}

class AddressDTO {
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

  @ApiProperty({ type: () => DocumentDTO })
  document: DocumentDTO;

  @ApiProperty()
  age: number;

  @ApiProperty()
  email: string;

  @ApiProperty({ type: () => PhoneDTO, isArray: true })
  phones: PhoneDTO[];

  @ApiProperty({ type: () => AddressDTO, isArray: true })
  addresses: AddressDTO[];

  @ApiProperty()
  documentId: string;
}
