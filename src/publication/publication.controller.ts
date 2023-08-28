import { Body, Controller, Delete, Get, Post, Put, Param, ParseIntPipe } from '@nestjs/common';
import { PublicationService } from './publication.service';

@Controller('publication')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @Post()
  createPublication(@Body() data: {mediaId: number, postId: number, date: Date}) {
    return this.publicationService.createPublication(data)
  }

  @Get()
  getPublications() {
    return this.publicationService.getPublications()
  }

  @Get(':id') 
  getPublicationById(@Param('id', ParseIntPipe) id: number) {
    return this.publicationService.getPublicationById(id)
  }

  @Put(':id')
  updatePublication(@Param('id', ParseIntPipe) id: number, @Body() data: {mediaId: number, postId: number, date: Date}) {
    return this.publicationService.updatePublication(id, data)
  }

  @Delete(':id')
  deletePublication(@Param('id', ParseIntPipe) id: number) {
    return this.publicationService.deletePublication(id)
  }
}
