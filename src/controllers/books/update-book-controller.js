import UpdateBookService from '../../services/books/update-book-service.js';

class UpdateBookController {
  async handler(req, res) {
    try {
      const {
        body,
        params: { id },
      } = req;

      const updateBookService = new UpdateBookService();
      const response = await updateBookService.execute(id, body);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default UpdateBookController;
