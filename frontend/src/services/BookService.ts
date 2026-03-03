// Own
import type { CreateBookDTO } from '@/dtos/CreateBookDTO.js';
import type { BookInterface } from '@/interfaces/BookInterface';
import { useBookStore } from '@/stores/bookstore.js';
import { ReviewService } from './ReviewService';

export class BookService {
  // access operations
  static getBooks(): BookInterface[] {
    return useBookStore().books;
  }

  static getBookById(id: number): BookInterface | undefined {
    return useBookStore().books.find((book) => book.id === id);
  }

  static getUniqueBookCategories(): string[] {
    const books = useBookStore().books;
    const categories = books.map((book) => book.category);
    const uniqueCategories = new Set(categories);

    return Array.from(uniqueCategories);
  }

  static filterBooksByCategory(category: string): BookInterface[] {
    const books = useBookStore().books;
    if (category) {
      return books.filter((book) => book.category === category);
    }
    return books;
  }

  // crud operations
  static createBook(book: CreateBookDTO): void {
    const id = useBookStore().books.length + 1;
    useBookStore().books.push({ id, ...book });
  }

  static deleteLastBook(): void {
    const book = useBookStore().books.pop();
    if (book) {
      ReviewService.deleteReviewsByBookId(book.id);
    }
  }
}
