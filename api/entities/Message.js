class Message {
  constructor({ userId, text, timestamp = new Date(), messageReceiverId }) {
    this.messageOwner = userId;
    this.text = text;
    this.timestamp = timestamp;
    this.messageReceiver = messageReceiverId;
  }
}

module.exports = Message;