import { Controller, Body, Patch, Param } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { UpdateDocumentDto } from './dto/update-document.dto';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Patch('/documentId=:documentId')
  updateDocument(
    @Param('documentId') id: string,
    @Body() updateDocumentDto: UpdateDocumentDto,
  ) {
    return this.documentsService.updateDocument(id, updateDocumentDto);
  }
}
