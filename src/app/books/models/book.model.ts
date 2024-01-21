export interface Book {
  title: string;
  author: string;
  edition: number;
}

export type BookKeys = keyof Book;
