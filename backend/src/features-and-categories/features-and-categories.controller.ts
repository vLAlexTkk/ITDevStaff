import { Controller, Get } from '@nestjs/common';

import { CategoryDto } from 'src/articles/dto/category.dto';
import { FeatureDto } from 'src/articles/dto/feature.dto';

@Controller('features-and-categories')
export class FeaturesAndCategoriesController {
  @Get('categories')
  getCategories(): CategoryDto[] {
    return [
      { id: 1, name: 'Technology', iconPath: '/icons/technology-icon.svg' },
      { id: 2, name: 'Health', iconPath: '/icons/health-icons.svg' },
      { id: 3, name: 'Finance', iconPath: '/icons/finance-icon.svg' },
      { id: 4, name: 'Psychology', iconPath: '/icons/psychology-icon.svg' },
      { id: 5, name: 'Travel', iconPath: '/icons/travel-icon.svg' },
      { id: 6, name: 'Education', iconPath: '/icons/education-icon.svg' },
      { id: 7, name: 'Lifestyle', iconPath: '/icons/lifestyle-icon.svg' },
      { id: 8, name: 'Science', iconPath: '/icons/science-icon.svg' },
      { id: 9, name: 'Sports', iconPath: '/icons/sports-icon.svg' },
      {
        id: 10,
        name: 'Entertainment',
        iconPath: '/icons/entertainment-icon.svg',
      },
    ];
  }

  @Get('features')
  getFeatures(): FeatureDto[] {
    return [
      { id: 1, name: 'Most Visited' },
      { id: 2, name: 'Trending' },
      { id: 3, name: 'Recommended' },
      { id: 4, name: 'Recently Added' },
      { id: 5, name: 'Interviews' },
    ];
  }
}
