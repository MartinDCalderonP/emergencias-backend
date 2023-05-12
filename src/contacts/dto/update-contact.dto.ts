import { PartialType } from '@nestjs/swagger';
import {
  CreateDocumentDto,
  CreatePhoneDto,
  CreateAddressDto,
  CreateContactDto,
} from './create-contact.dto';

export class UpdateDocumentDto extends PartialType(CreateDocumentDto) {}

export class UpdatePhoneDto extends PartialType(CreatePhoneDto) {}

export class UpdateAddressDto extends PartialType(CreateAddressDto) {}

export class UpdateContactDto extends PartialType(CreateContactDto) {}
