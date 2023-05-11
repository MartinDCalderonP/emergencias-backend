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

  findOneById(id: string) {
    return this.prisma.contact.findUnique({
      where: { id },
    });
  }

  findOneByEmail(email: string) {
    return this.prisma.contact.findUnique({
      where: { email },
    });
  }

  findAllByFirstName(firstName: string) {
    return this.prisma.contact.findMany({
      where: { firstName },
    });
  }

  findAllByLastName(lastName: string) {
    return this.prisma.contact.findMany({
      where: { lastName },
    });
  }

  async findOneByDocumentNumber(documentNumber: string) {
    const document = await this.prisma.document.findUnique({
      where: { number: documentNumber },
    });

    return this.prisma.contact.findUnique({
      where: { documentId: document.contactId },
    });
  }

  findAllByAge(age: number) {
    return this.prisma.contact.findMany({
      where: { age },
    });
  }

  async findOneByPhone(phoneNumber: string) {
    const phone = await this.prisma.phone.findUnique({
      where: { number: phoneNumber },
    });

    return this.prisma.contact.findUnique({
      where: { id: phone.contactId },
    });
  }

  async findAllByAddress(address: string) {
    const addresses = await this.prisma.address.findMany({
      where: { street: address },
    });

    return await this.prisma.contact.findMany({
      where: {
        addresses: {
          some: {
            id: {
              in: addresses.map((address) => address.id),
            },
          },
        },
      },
    });
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
