import { Router } from 'express';
import booksRoutes from './books-routes.js';

const router = Router();

router.use('/book', booksRoutes);

export default router;
