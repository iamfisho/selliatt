class Message {
  constructor({ userId, text, timestamp = new Date(), senderId }) {
    this.userId = userId;
    this.text = text;
    this.timestamp = timestamp;
    this.senderId = senderId;
  }
}

module.exports = Message;