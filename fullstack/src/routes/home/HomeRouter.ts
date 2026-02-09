import { Router } from 'express';
import { HomeController } from '../../controllers/HomeController.js';

export class HomeRouter {
    static getRouter(): Router {
        const router: Router = Router();

        router.get('/', HomeController.index);
        router.get('/about', HomeController.about);
        router.get('/contact', HomeController.contact);

        return router;
    }
}
