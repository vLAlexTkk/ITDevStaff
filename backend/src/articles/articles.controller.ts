import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  NotFoundException,
  Render,
} from '@nestjs/common';

import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('admin')
export class AdminController {
  @Get()
  @Render('admin')
  showAdminPage() {
    return {};
  }
}

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  findAll() {
    return this.articlesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const article = this.articlesService.findOne(Number(id));
    if (!article) {
      throw new NotFoundException('Article not found');
    }
    return article;
  }

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }
}
