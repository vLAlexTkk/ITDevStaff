import { ArticlesService } from './articles.service';

describe('ArticlesService', () => {
  let service: ArticlesService;

  beforeEach(() => {
    service = new ArticlesService();
  });

  it('should return all articles', () => {
    const articles = service.findAll();
    const articlesData = service.findAll();
    expect(articles.length).toBe(articlesData.length);
  });

  it('should return article by ID', () => {
    const articlesData = service.findAll();
    const article = service.findOne(articlesData[0].id); 
    expect(article).toEqual(articlesData[0]);
  });

  it('should return undefined if not found', () => {
    const article = service.findOne(999);
    expect(article).toBeUndefined();
  });
});
