import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressesService {
  constructor(private prisma: PrismaService) {}
  updateAddress(id: string, updateAddressDto: UpdateAddressDto) {
    return this.prisma.address.update({
      where: { id },
      data: {
        street: updateAddressDto.street,
        number: updateAddressDto.number,
        city: updateAddressDto.city,
        description: updateAddressDto.description,
        contactId: updateAddressDto.contactId,
      },
    });
  }
}
