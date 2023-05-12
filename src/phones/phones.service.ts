import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { UpdatePhoneDto } from './dto/update-phone.dto';

@Injectable()
export class PhonesService {
  constructor(private prisma: PrismaService) {}
  updatePhone(id: string, updatePhoneDto: UpdatePhoneDto) {
    return this.prisma.phone.update({
      where: { id },
      data: {
        type: updatePhoneDto.type,
        number: updatePhoneDto.number,
        contactId: updatePhoneDto.contactId,
      },
    });
  }
}
