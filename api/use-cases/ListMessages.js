class ListMessages {
  constructor(messageRepository) {
    this.messageRepository = messageRepository;
  }

  async execute(userId, senderId, limit, offset) {
    return this.messageRepository.listMessages(userId, senderId, limit, offset);
  }
}

module.exports = ListMessages;