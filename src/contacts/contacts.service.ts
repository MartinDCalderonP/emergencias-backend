import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}

  create(createContactDto: CreateContactDto) {
    return this.prisma.contact.create({
      data: {
        firstName: createContactDto.firstName,
        lastName: createContactDto.lastName,
        document: {
          create: {
            type: createContactDto.document.type,
            number: createContactDto.document.number,
          },
        },
        age: createContactDto.age,
        email: createContactDto.email,
        phones: {
          create: createContactDto.phones.map((phone) => ({
            type: phone.type,
            number: phone.number,
          })),
        },
        addresses: {
          create: createContactDto.addresses.map((address) => ({
            street: address.street,
            number: address.number,
            city: address.city,
            description: address.description,
          })),
        },
      },
    });
  }

  findAll() {
    return `This action returns all contacts`;
  }

  findOne(id: string) {
    return `This action returns a #${id} contact`;
  }

  update(id: string, updateContactDto: UpdateContactDto) {
    return this.prisma.contact.update({
      where: { id },
      data: {
        firstName: updateContactDto.firstName,
        lastName: updateContactDto.lastName,
        document: {
          update: {
            type: updateContactDto.document.type,
            number: updateContactDto.document.number,
          },
        },
        age: updateContactDto.age,
        email: updateContactDto.email,
        phones: {
          update: updateContactDto.phones.map((phone) => ({
            where: { id: phone.id },
            data: {
              type: phone.type,
              number: phone.number,
            },
          })),
        },
        addresses: {
          update: updateContactDto.addresses.map((address) => ({
            where: { id: address.id },
            data: {
              street: address.street,
              number: address.number,
              city: address.city,
              description: address.description,
            },
          })),
        },
      },
    });
  }

  remove(id: string) {
    return `This action removes a #${id} contact`;
  }
}
