import { ApiProperty } from '@nestjs/swagger';

class DocumentDTO {
  @ApiProperty()
  type: string;

  @ApiProperty()
  number: string;
}

class PhoneDTO {
  @ApiProperty()
  type: string;

  @ApiProperty()
  number: string;
}

class AddressDTO {
  @ApiProperty()
  street: string;

  @ApiProperty()
  number: string;

  @ApiProperty()
  city: string;

  @ApiProperty({ required: false })
  description: string;
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

  @ApiProperty({ type: () => PhoneDTO })
  phones: PhoneDTO[];

  @ApiProperty({ type: () => AddressDTO })
  addresses: AddressDTO[];
}
