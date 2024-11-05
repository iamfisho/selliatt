const SendMessage = require("../use-cases/SendMessage");

class WebSocket {
  constructor(io, messageRepository) {
    this.io = io;
    this.sendMessage = new SendMessage({ messageRepository });
  }

  async handleSendMessage(msg) {
    const savedMessage = await this.sendMessage.execute(msg);
    this.io.emit('receiveMessage', savedMessage);
  }
}

module.exports = WebSocket;