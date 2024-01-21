import { BooksService } from './books.service';
import { MOCK_BOOKS } from '../mock-books';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    service = new BooksService();
  });

  it('should return books sorted by title in ascending order', () => {
    const sortedBooks = service.getBooks(['title'], [true]);
    const expectedSortedBooks = [...MOCK_BOOKS].sort((a, b) => a.title.localeCompare(b.title));
    expect(sortedBooks).toEqual(expectedSortedBooks);
  });

  it('should return books sorted by author in ascending order and title in descending order', () => {
    const sortedBooks = service.getBooks(['author', 'title'], [true, false]);
    const expectedSortedBooks = [...MOCK_BOOKS].sort((a, b) => {
      const authorCompare = a.author.localeCompare(b.author);
      if (authorCompare !== 0) return authorCompare;
      return b.title.localeCompare(a.title);
    });
    expect(sortedBooks).toEqual(expectedSortedBooks);
  });

  it('should return books sorted by edition in descending order, author in descending order, and title in ascending order', () => {
    const sortedBooks = service.getBooks(['edition', 'author', 'title'], [false, false, true]);
    const expectedSortedBooks = [...MOCK_BOOKS].sort((a, b) => {
      const editionCompare = b.edition - a.edition;
      if (editionCompare !== 0) return editionCompare;
      const authorCompare = b.author.localeCompare(a.author);
      if (authorCompare !== 0) return authorCompare;
      return a.title.localeCompare(b.title);
    });
    expect(sortedBooks).toEqual(expectedSortedBooks);
  });


});
