import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  deletePost(id: number) {
    return this.prisma.post.delete({
      where: {
        id
      }
    })
  }
  updatePost(id: number, data : any) {
    const {title, text, image} = data;
    return this.prisma.post.update({
      where: {
        id
      },
      data: {
        title, 
        text,
        image
      }
    })
  }
  getPostById(id: number) {
    return this.prisma.post.findUnique({
      where: {
        id 
      }
    })
  }
  getPosts() {
    return this.prisma.post.findMany();
  }
  createPost(data: any) {
    const { title, text, image } = data;

    return this.prisma.post.create({
      data: {
        title,
        text,
        image
      }
    })
  }
}
