import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return a list of endpoints as HTML', () => {
      const result = appController.getEndpoints();
      expect(result).toContain('<html>');
      expect(result).toContain('<h1>Available API Endpoints</h1>');
      expect(result).toContain('<a href="/articles" target="_blank">/articles</a>');
      expect(result).toContain('<a href="/articles/1" target="_blank">/articles/:id</a>');
    });
  });
});
