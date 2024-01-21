import { Injectable } from '@angular/core';
import { Book, BookKeys } from '../models/book.model';
import { MOCK_BOOKS } from '../mock-books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Book[] = MOCK_BOOKS;

  constructor() { }

  getBooks(orderBy: BookKeys[] = ['title'], orderDirections: boolean[] = [true]): Book[] {
    if (orderBy.length === 0) {
      throw new Error('OrdenacaoException: Nenhum critério de ordenação fornecido');
    }

    return this.books.sort((a, b) => {
      for (let i = 0; i < orderBy.length; i++) {
        const key = orderBy[i];
        const direction = orderDirections[i] ? 1 : -1;

        if (a[key] < b[key]) {
          return -1 * direction;
        } else if (a[key] > b[key]) {
          return 1 * direction;
        }
      }
      return 0;
    });
  }
}
