import { Injectable } from '@nestjs/common';
import { Article } from './articles.inteface';

import articlesData from '../articles/data/articles-data.json';

@Injectable()
export class ArticlesService {
  private articles: Article[] = articlesData as Article[];

  findAll(): Article[] {
    return this.articles;
  }

  findOne(id: number): Article | undefined {
    return this.articles.find((article) => article.id === id);
  }

  create(article: Omit<Article, 'id'>): Article {
    const newArticle: Article = {
      id: this.articles.length + 1,
      ...article,
    };
    this.articles.push(newArticle);
    return newArticle;
  }
}
