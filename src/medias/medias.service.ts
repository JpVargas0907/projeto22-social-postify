import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class MediasService {
  constructor(private prisma: PrismaService) {}

  deleteMedia(id: number) {
    return this.prisma.media.delete({
      where: {
        id
      }
    })
  }
  updateMedia(id: number, data : any) {
    const {title, username} = data;
    return this.prisma.media.update({
      where: {
        id
      },
      data: {
        title, 
        username
      }
    })
  }
  getMediaById(id: number) {
    return this.prisma.media.findUnique({
      where: {
        id 
      }
    })
  }
  getMedias() {
    return this.prisma.media.findMany();
  }
  createMedia(data: any) {
    const { title, username } = data;

    return this.prisma.media.create({
      data: {
        title,
        username
      }
    })
  }
}
