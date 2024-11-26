export interface Article {
  id: number;
  category_id: number;
  title: string;
  author: string;
  views: string;
  content: string;
  features: number[];
  imagePath?: string;
}