import { Router } from 'express';
import { BookController } from '../../controllers/BookController.js';

export class BookRouter {
    static getRouter(): Router {
        const router: Router = Router();
        const bookController: BookController = new BookController();

        router.get('/', bookController.index.bind(bookController));
        router.get('/:id', bookController.show.bind(bookController));

        return router;
    }
}
