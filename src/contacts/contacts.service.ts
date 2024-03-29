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
          create: createContactDto.document.map((document) => ({
            type: document.type,
            number: document.number,
          })),
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
    return this.prisma.contact.findMany({
      include: {
        document: true,
        phones: true,
        addresses: true,
      },
    });
  }

  findOneById(id: string) {
    return this.prisma.contact.findUnique({
      where: { id },
      include: {
        document: true,
        phones: true,
        addresses: true,
      },
    });
  }

  findAllByEmail(email: string) {
    return this.prisma.contact.findMany({
      where: { email },
      include: {
        document: true,
        phones: true,
        addresses: true,
      },
    });
  }

  findAllByFirstName(firstName: string) {
    return this.prisma.contact.findMany({
      where: { firstName },
      include: {
        document: true,
        phones: true,
        addresses: true,
      },
    });
  }

  findAllByLastName(lastName: string) {
    return this.prisma.contact.findMany({
      where: { lastName },
      include: {
        document: true,
        phones: true,
        addresses: true,
      },
    });
  }

  async findOneByDocumentNumber(documentNumber: string) {
    const document = await this.prisma.document.findUnique({
      where: { number: documentNumber },
    });

    return this.prisma.contact.findUnique({
      where: { id: document.contactId },
      include: {
        document: true,
        phones: true,
        addresses: true,
      },
    });
  }

  findAllByAge(age: number) {
    return this.prisma.contact.findMany({
      where: { age },
      include: {
        document: true,
        phones: true,
        addresses: true,
      },
    });
  }

  async findOneByPhone(phoneNumber: string) {
    const phone = await this.prisma.phone.findUnique({
      where: { number: phoneNumber },
    });

    return this.prisma.contact.findUnique({
      where: { id: phone.contactId },
      include: {
        document: true,
        phones: true,
        addresses: true,
      },
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
      include: {
        document: true,
        phones: true,
        addresses: true,
      },
    });
  }

  updateContact(id: string, updateContactDto: UpdateContactDto) {
    return this.prisma.contact.update({
      where: { id },
      data: {
        firstName: updateContactDto.firstName,
        lastName: updateContactDto.lastName,
        age: updateContactDto.age,
        email: updateContactDto.email,
      },
    });
  }

  removeById(id: string) {
    return this.prisma.contact.delete({
      where: { id },
    });
  }

  removeAll() {
    return this.prisma.contact.deleteMany();
  }
}
