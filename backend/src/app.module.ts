import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { AdminController } from './admin/admin.controller';
import { FeaturesAndCategoriesController } from './features-and-categories/features-and-categories.controller';

@Module({
  imports: [ArticlesModule],
  controllers: [AppController, AdminController, FeaturesAndCategoriesController],
  providers: [AppService],
})
export class AppModule {}
