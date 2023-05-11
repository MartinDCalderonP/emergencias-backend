import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [PrismaModule, ContactsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
