import { Router } from 'express';

const booksRoutes = Router();
const books = [];

booksRoutes.get('/', (req, res) => {
  res.status(200).json(books);
});

booksRoutes.get('/:id', (req, res) => {
  const {
    params: { id },
  } = req;

  const index = searchBook(id);
  res.status(200).json(books[index]);
});

booksRoutes.post('/', (req, res) => {
  const { body } = req;

  books.push(body);
  res.status(201).json(body);
});

booksRoutes.put('/:id', (req, res) => {
  const {
    body: { title },
    params: { id },
  } = req;

  const index = searchBook(id);
  books[index].title = title;

  res.status(200).json(books[index]);
});

booksRoutes.delete('/:id', (req, res) => {
  const {
    params: { id },
  } = req;

  const index = searchBook(id);
  books.splice(index, 1);

  res.json('Successfully removed book');
});

const searchBook = (id) => books.findIndex((book) => book.id === id);

export default booksRoutes;
