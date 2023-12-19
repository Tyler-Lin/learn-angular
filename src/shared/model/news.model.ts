export interface NewsParams {
  [key: string]: string | undefined;
}

export interface NewsData {
  articles?: Article[];
  status: string;
  totalResults: number;
}

export interface Article {
  source: { id: any; name: string };
  title: string;
  url: string;
  urlToImage: string;
  author: string;
  content: string;
  description: string;
  publishedAt: string;
}
