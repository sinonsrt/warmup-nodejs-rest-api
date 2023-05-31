import books from '../../entities/Book.js';

class GetBookByIdService {
  async execute(id) {
    return books.findById(id);
  }
  0;
}

export default GetBookByIdService;
