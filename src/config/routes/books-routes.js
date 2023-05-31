import { Router } from 'express';
import GetBookController from '../../controllers/books/get-book-controller.js';
import GetBookByIdController from '../../controllers/books/get-book-by-id-controller.js';
import CreateBookController from '../../controllers/books/Create-book-controller.js';
import UpdateBookController from '../../controllers/books/update-book-controller.js';
import RemoveBookController from '../../controllers/books/remove-book-controller.js';

const booksRoutes = Router();

const getBookController = new GetBookController();
const getBookByIdController = new GetBookByIdController();
const createBookController = new CreateBookController();
const updateBookController = new UpdateBookController();
const removeBookController = new RemoveBookController();

booksRoutes.get('/', getBookController.handler);

booksRoutes.get('/:id', getBookByIdController.handler);

booksRoutes.post('/', createBookController.handler);

booksRoutes.put('/:id', updateBookController.handler);

booksRoutes.delete('/:id', removeBookController.handler);

export default booksRoutes;
