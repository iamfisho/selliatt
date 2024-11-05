const Message = require("../entities/Message");

class SendMessage {
  constructor({ messageRepository }) {
    this.messageRepository = messageRepository;
  }

  async execute(messageData) {
    const message = new Message({
      userId: messageData.userId,
      text: messageData.text
    });
    this.messageRepository.save(message);
    return message;
  }
}

module.exports = SendMessage;