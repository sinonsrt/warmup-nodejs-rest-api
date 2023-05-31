import books from '../../entities/Book.js';

class UpdateBookService {
  async execute(id, book) {
    await books.findByIdAndUpdate(String(id), { $set: book });
    return book;
  }
}

export default UpdateBookService;
