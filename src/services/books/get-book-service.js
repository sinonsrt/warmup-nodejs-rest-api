import books from '../../entities/Book.js';

class GetBookService {
  async execute() {
    return books.find();
  }
}

export default GetBookService;
