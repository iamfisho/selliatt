class MessageController {
  constructor(sendMessage) {
    this.sendMessage = sendMessage;
  }

  async getConversation(req, res) {
    const { senderId, receiverId } = req.params;
    const { limit, offset } = req.query;
    try {
      const messages = await this.listMessages.execute(senderId, receiverId, limit, offset);
      res.status(200).json(messages);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  get router() {
    const router = require('express').Router();
    router.get('/:senderId/:receiverId', this.getConversation.bind(this));
    return router;
  }

}

module.exports = MessageController;