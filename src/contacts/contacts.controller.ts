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
import { UpdateContactDto } from './dto/update-contact.dto';
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

  @Get('/id=:id')
  findOneById(@Param('id') id: string) {
    return this.contactsService.findOneById(id);
  }

  @Get('/email=:email')
  findAllByEmail(@Param(':email') email: string) {
    return this.contactsService.findAllByEmail(email);
  }

  @Get('/firstName=:firstName')
  findAllByFirstName(@Param('firstName') firstName: string) {
    return this.contactsService.findAllByFirstName(firstName);
  }

  @Get('/lastName=:lastName')
  findAllByLastName(@Param('lastName') lastName: string) {
    return this.contactsService.findAllByLastName(lastName);
  }

  @Get('/documentNumber=:documentNumber')
  findOneByDocumentNumber(@Param('documentNumber') documentNumber: string) {
    return this.contactsService.findOneByDocumentNumber(documentNumber);
  }

  @Get('/age=:age')
  findAllByAge(@Param('age') age: number) {
    return this.contactsService.findAllByAge(age);
  }

  @Get('/phone=:phone')
  findOneByPhone(@Param('phone') phone: string) {
    return this.contactsService.findOneByPhone(phone);
  }

  @Get('/address=:address')
  findAllByAddress(@Param('address') address: string) {
    return this.contactsService.findAllByAddress(address);
  }

  @Patch('/id=:id')
  updateContact(
    @Param('id') id: string,
    @Body() updateContactDto: UpdateContactDto,
  ) {
    return this.contactsService.updateContact(id, updateContactDto);
  }

  @Delete('/id=:id')
  remove(@Param('id') id: string) {
    return this.contactsService.removeById(id);
  }

  @Delete()
  removeAll() {
    return this.contactsService.removeAll();
  }
}
