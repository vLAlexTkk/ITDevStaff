import { Module } from '@nestjs/common';
import { FeaturesAndCategoriesController } from './features-and-categories.controller';

@Module({
  controllers: [FeaturesAndCategoriesController],
})
export class FeaturesAndCategoriesModule {}
