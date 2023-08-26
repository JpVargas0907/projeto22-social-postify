import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PublicationService } from './publication.service';

@Controller('publication')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @Post()
  createPublication(@Body() body: any) {
    return this.publicationService.createPublication()
  }

  @Get()
  getPublications() {
    return this.publicationService.getPublications()
  }

  @Get() 
  getPublicationById() {
    return this.publicationService.getPublicationById()
  }

  @Put()
  updatePublication() {
    return this.publicationService.updatePublication()
  }

  @Delete()
  deletePublication() {
    return this.publicationService.deletePublication()
  }
}
