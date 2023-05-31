import CreateBookService from '../../services/books/create-book-service.js';

class CreateBookController {
  async handler(req, res) {
    try {
      const { body } = req;

      const createBookService = new CreateBookService();
      const response = await createBookService.execute(body);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default CreateBookController;
