import RemoveBookService from '../../services/books/remove-book-service.js';

class RemoveBookController {
  async handler(req, res) {
    try {
      const {
        params: { id },
      } = req;

      const removeBookService = new RemoveBookService();
      const response = await removeBookService.execute(id);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default RemoveBookController;
