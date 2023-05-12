import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ContactsModule } from './contacts/contacts.module';
import { DocumentsModule } from './documents/documents.module';
import { PhonesModule } from './phones/phones.module';
import { addressesModule } from './addresses/addresses.module';

@Module({
  imports: [
    PrismaModule,
    ContactsModule,
    DocumentsModule,
    PhonesModule,
    addressesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
