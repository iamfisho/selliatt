const MessageRepository = require("../../repositories/MessageRepository");
const MessageModel = require('../../models/Message');

class MongoMessageRepository extends MessageRepository {
  async save(message) {
    console.log(message);
    const messageModel = new MessageModel(message);
    await messageModel.save();
  }

  async listMessages(userId, senderId, limit, offset) {
    return await MessageModel.find({
      $or: [
        { userId, senderId },
        { senderId: userId, userId: senderId }
      ]
    }).sort({ createdAt: -1 }).skip(offset).limit(limit);
  }
}

module.exports = MongoMessageRepository;