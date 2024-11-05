const MessageRepository = require("../../repositories/MessageRepository");
const MessageModel = require('../../models/Message');

class MongoMessageRepository extends MessageRepository {
  async save(message) {
    console.log(message);
    const messageModel = new MessageModel(message);
    await messageModel.save();
  }

  async listMessages(senderId, receiverId, limit, offset) {
    return await MessageModel.find({
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId }
      ]
    }).sort({ createdAt: -1 }).skip(offset).limit(limit);
  }
}

module.exports = MongoMessageRepository;