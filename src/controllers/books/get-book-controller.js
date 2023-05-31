import GetBookService from '../../services/books/get-book-service.js';

class GetBookController {
  async handler(req, res) {
    try {
      const getBookService = new GetBookService();

      const response = await getBookService.execute();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default GetBookController;
