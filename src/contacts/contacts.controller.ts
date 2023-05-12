import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import {
  UpdateDocumentDto,
  UpdatePhoneDto,
  UpdateAddressDto,
  UpdateContactDto,
} from './dto/update-contact.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('contacts')
@ApiTags('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(createContactDto);
  }

  @Get()
  findAll() {
    return this.contactsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactsService.findOneById(id);
  }

  @Get(':email')
  findOneByEmail(@Body() email: string) {
    return this.contactsService.findOneByEmail(email);
  }

  @Get(':firstName')
  findAllByFirstName(@Param('firstName') firstName: string) {
    return this.contactsService.findAllByFirstName(firstName);
  }

  @Get(':lastName')
  findAllByLastName(@Param('lastName') lastName: string) {
    return this.contactsService.findAllByLastName(lastName);
  }

  @Get(':documentNumber')
  findOneByDocumentNumber(@Param('documentNumber') documentNumber: string) {
    return this.contactsService.findOneByDocumentNumber(documentNumber);
  }

  @Get(':age')
  findAllByAge(@Param('age') age: number) {
    return this.contactsService.findAllByAge(age);
  }

  @Get(':phone')
  findOneByPhone(@Param('phone') phone: string) {
    return this.contactsService.findOneByPhone(phone);
  }

  @Get(':address')
  findAllByAddress(@Param('address') address: string) {
    return this.contactsService.findAllByAddress(address);
  }

  @Patch(':id')
  updateContact(
    @Param('id') id: string,
    @Body() updateContactDto: UpdateContactDto,
  ) {
    return this.contactsService.updateContact(id, updateContactDto);
  }

  @Patch(':documentId')
  updateDocument(
    @Param('documentId') id: string,
    @Body() updateDocumentDto: UpdateDocumentDto,
  ) {
    return this.contactsService.updateDocument(id, updateDocumentDto);
  }

  @Patch(':phoneId')
  updatePhone(
    @Param('phoneId') id: string,
    @Body() updatePhoneDto: UpdatePhoneDto,
  ) {
    return this.contactsService.updatePhone(id, updatePhoneDto);
  }

  @Patch(':addressId')
  updateAddress(
    @Param('addressId') id: string,
    @Body() updateAddressDto: UpdateAddressDto,
  ) {
    return this.contactsService.updateAddress(id, updateAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactsService.removeById(id);
  }

  @Delete()
  removeAll() {
    return this.contactsService.removeAll();
  }
}
