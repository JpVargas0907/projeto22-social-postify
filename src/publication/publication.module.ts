import { Module } from '@nestjs/common';
import { PublicationController } from './publication.controller';
import { PublicationService } from './publication.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PublicationController],
  providers: [PublicationService, PrismaService]
})
export class PublicationModule {}
