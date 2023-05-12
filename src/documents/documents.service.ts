import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { UpdateDocumentDto } from './dto/update-document.dto';

@Injectable()
export class DocumentsService {
  constructor(private prisma: PrismaService) {}

  updateDocument(id: string, updateDocumentDto: UpdateDocumentDto) {
    return this.prisma.document.update({
      where: { id },
      data: {
        type: updateDocumentDto.type,
        number: updateDocumentDto.number,
        contactId: updateDocumentDto.contactId,
      },
    });
  }
}
