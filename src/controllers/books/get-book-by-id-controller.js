import GetBookByIdService from '../../services/books/get-book-by-id-service.js';

class GetBookByIdController {
  async handler(req, res) {
    try {
      const {
        params: { id },
      } = req;

      const getBookService = new GetBookByIdService();

      const response = await getBookService.execute(id);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default GetBookByIdController;
