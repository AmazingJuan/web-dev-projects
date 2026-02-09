import { Router } from 'express';
import { BookRouter } from './books/BookRouter.js';
import { HomeRouter } from './home/HomeRouter.js';

export default class Routes {
    static initializeRoutes(): Router {
        const router = Router();

        router.use('', HomeRouter.getRouter());
        router.use('/books', BookRouter.getRouter());

        return router;
    }
}
