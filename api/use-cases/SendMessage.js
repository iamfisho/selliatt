const Message = require("../entities/Message");

class SendMessage {
  constructor({ messageRepository }) {
    this.messageRepository = messageRepository;
  }

  async execute(messageData) {
    const message = new Message({
      userId: messageData.userId,
      text: messageData.text,
      senderId: messageData.senderId
    });
    this.messageRepository.save(message);
    return message;
  }
}

module.exports = SendMessage;