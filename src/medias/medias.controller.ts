import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { MediasService } from './medias.service';

@Controller('medias')
export class MediasController {
  constructor(private readonly mediasService: MediasService) {}

  @Post()
  createMedia(@Body() body: any) {
    return this.mediasService.createMedia()
  }

  @Get()
  getMedias() {
    return this.mediasService.getMedias()
  }

  @Get() 
  getMediaById() {
    return this.mediasService.getMediaById()
  }

  @Put()
  updateMedia() {
    return this.mediasService.updateMedia()
  }

  @Delete()
  deleteMedia() {
    return this.mediasService.deleteMedia()
  }
}
