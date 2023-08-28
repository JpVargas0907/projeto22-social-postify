import { Body, Controller, Delete, Get, Post, Put, Param, ParseIntPipe } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  createPost(@Body() data: {title: string, text: string, image: string}) {
    return this.postsService.createPost(data)
  }

  @Get()
  getPosts() {
    return this.postsService.getPosts()
  }

  @Get(':id') 
  getPostById(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.getPostById(id)
  }

  @Put(':id')
  updatePost(@Param('id', ParseIntPipe) id: number, @Body() data: {title: string, text: string, image: string}) {
    return this.postsService.updatePost(id, data)
  }

  @Delete(':id')
  deletePost(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.deletePost(id)
  }
}
