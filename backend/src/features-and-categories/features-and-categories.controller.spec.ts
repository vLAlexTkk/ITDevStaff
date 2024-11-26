import { Test, TestingModule } from '@nestjs/testing';
import { FeaturesAndCategoriesController } from './features-and-categories.controller';

describe('FeaturesAndCategoriesController', () => {
  let controller: FeaturesAndCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeaturesAndCategoriesController],
    }).compile();

    controller = module.get<FeaturesAndCategoriesController>(FeaturesAndCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
