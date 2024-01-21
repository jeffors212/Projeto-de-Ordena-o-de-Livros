import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksListComponentComponent } from '../books-list-component/books-list-component.component';
import { BooksService } from '../../services/books.service';
import { MOCK_BOOKS } from '../../mock-books';

describe('BooksListComponentComponent', () => {
  let component: BooksListComponentComponent;
  let fixture: ComponentFixture<BooksListComponentComponent>;
  let booksService: BooksService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksListComponentComponent],
      providers: [BooksService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksListComponentComponent);
    component = fixture.componentInstance;
    booksService = TestBed.inject(BooksService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display books in the correct initial order', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const firstRowData = compiled.querySelector('tbody tr:first-child')?.textContent;
    expect(firstRowData).toContain(MOCK_BOOKS[0].title);
  });

  it('should change the sort order when toggleSortOrder is called', () => {
    component.toggleSortOrder();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const firstRowDataAfterToggle = compiled.querySelector('tbody tr:first-child')?.textContent;
    expect(firstRowDataAfterToggle).not.toContain(MOCK_BOOKS[0].title);
  });
});
