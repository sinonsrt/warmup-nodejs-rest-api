import books from '../../entities/Book.js';

class RemoveBookService {
  async execute(id) {
    return books.findByIdAndDelete(id);
  }
}

export default RemoveBookService;
