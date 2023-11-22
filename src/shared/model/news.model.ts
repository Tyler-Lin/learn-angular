export interface NewsData {
  articles: Article[];
  status: string;
  totalResults: number;
  source: { id: any; name: string };
  title: string;
  url: string;
  urlToImage: string;
}

export interface Article {
  author: string;
  contejt: string;
  description: string;
  publishedAt: string;
}
