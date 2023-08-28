import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PublicationService {
  constructor(private prisma: PrismaService) {}

  deletePublication(id: number) {
    return this.prisma.post.delete({
      where: {
        id
      }
    })
  }
  updatePublication(id: number, data: any) {
    const {mediaId, postId, date} = data;
    return this.prisma.publication.update({
      where: {
        id
      },
      data: {
        mediaId, 
        postId, 
        date
      }
    })
  }
  getPublicationById(id: number) {
    return this.prisma.publication.findUnique({
      where: {
        id
      }
    })
  }
  getPublications() {
    return this.prisma.publication.findMany();
  }
  createPublication(data: any) {
    const {mediaId, postId, date } = data;
    
    return this.prisma.publication.create({
      data: {
        mediaId,
        postId,
        date
      }
    })
  }
}
