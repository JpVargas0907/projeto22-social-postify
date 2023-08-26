import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  createPost(@Body() body: any) {
    return this.postsService.createPost()
  }

  @Get()
  getPosts() {
    return this.postsService.getPosts()
  }

  @Get() 
  getPostById() {
    return this.postsService.getPostById()
  }

  @Put()
  updatePost() {
    return this.postsService.updatePost()
  }

  @Delete()
  deletePost() {
    return this.postsService.deletePost()
  }
}
