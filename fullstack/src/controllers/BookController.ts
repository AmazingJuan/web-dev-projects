import type { Request, Response } from 'express';
import type { Book } from '../models/Book.js';
import { BookRepository } from '../repositories/BookRepository.js';

export class BookController {
    private repository: BookRepository;

    constructor() {
        this.repository = new BookRepository();
    }

    public index(req: Request, res: Response): void {
        const viewData: { [key: string]: any } = {};
        viewData['books'] = this.repository.getAll();

        res.render('books/index', { viewData: viewData });
    }

    public show(req: Request, res: Response): void {
        const viewData: { [key: string]: any } = {};

        const idParam = Array.isArray(req.params.id)
            ? req.params.id[0]
            : req.params.id;
        const id = Number(idParam ?? 0);

        const book: Book = this.repository.findById(id);

        viewData['book'] = book;

        res.render('books/show', { viewData: viewData });
    }
}
