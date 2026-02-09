import type { Book } from '../models/Book.js';
import { books } from '../data/Books.js';
export class BookRepository {
    private books: Book[];

    constructor() {
        this.books = books;
    }

    public getAll(): Book[] {
        return this.books;
    }

    public findById(id: number): Book {
        const books: Book[] = this.books;

        const book: Book | undefined = books.find((book) => book.id === id);
        if (!book) {
            throw new Error(`Book with id ${id} not found`);
        }

        return book;
    }
}
