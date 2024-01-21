import { Component, OnInit } from '@angular/core';
import { Book, BookKeys } from '../../models/book.model';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books-list-component',
  templateUrl: './books-list-component.component.html',
  styleUrls: ['./books-list-component.component.css']
})
export class BooksListComponentComponent implements OnInit {
  books: Book[] = [];
  currentOrderBy: BookKeys = 'title';
  sortOrder: {[key in BookKeys]?: boolean} = {
    'title': true,
    'author': true,
    'edition': true
  };

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    const orderBy = [this.currentOrderBy];
    const orderDirections = [this.sortOrder[this.currentOrderBy] ?? true];
    this.books = this.booksService.getBooks(orderBy, orderDirections);
  }

  changeSort(orderBy: BookKeys): void {
    this.sortOrder[orderBy] = this.sortOrder[orderBy] !== undefined ? !this.sortOrder[orderBy] : true;
    this.currentOrderBy = orderBy;
    this.getBooks();
  }

  toggleSortOrder(): void {
    this.sortOrder[this.currentOrderBy] = this.sortOrder[this.currentOrderBy] !== undefined ? !this.sortOrder[this.currentOrderBy] : true;
    this.getBooks();
  }
}
