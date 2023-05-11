import { Address, Document, Phone } from '@prisma/client';

export class CreateContactDto {
  id: string;
  firstName: string;
  lastName: string;
  document: Document;
  age: number;
  email: string;
  phones: Phone[];
  addresses: Address[];
}
