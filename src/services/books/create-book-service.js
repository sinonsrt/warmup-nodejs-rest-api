import books from '../../entities/Book.js';

class CreateBookService {
  async execute(newBook) {
    const book = new books(newBook);
    await book.save();

    return newBook;
  }
}

export default CreateBookService;
