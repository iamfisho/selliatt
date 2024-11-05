class MessageRepository {
  async save(message) {
    throw new Error('Method not implemented');
  }

  async listMessages(senderId, receiverId, limit, offset) {
    throw new Error('Method not implemented');
  }
}

module.exports = MessageRepository;