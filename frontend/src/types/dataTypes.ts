export interface Category {
  id: number;
  name: string;
  iconPath: string;
}

export interface Article {
  id: number;
  category_id: number;
  imagePath?: string;
  title: string;
  content: string;
  author: string;
  views: string;
  features: number[];
}

export interface Features {
  id: number;
  name: string;
}

