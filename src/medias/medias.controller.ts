import { Body, Controller, Delete, Get, Post, Put, Param, ParseIntPipe } from '@nestjs/common';
import { MediasService } from './medias.service';

@Controller('medias')
export class MediasController {
  constructor(private readonly mediasService: MediasService) {}

  @Post()
  createMedia(@Body() data: {title: string, username: string}) {
    return this.mediasService.createMedia(data)
  }

  @Get()
  getMedias() {
    return this.mediasService.getMedias()
  }

  @Get(':id') 
  getMediaById(@Param('id', ParseIntPipe) id: number) {
    return this.mediasService.getMediaById(id)
  }

  @Put(':id')
  updateMedia(@Param('id', ParseIntPipe) id: number, @Body() data: {title: string, username: string}) {
    return this.mediasService.updateMedia(id, data)
  }

  @Delete(':id')
  deleteMedia(@Param('id', ParseIntPipe) id: number) {
    return this.mediasService.deleteMedia(id)
  }
}
