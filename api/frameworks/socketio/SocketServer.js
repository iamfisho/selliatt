const WebSocket = require('../../gateways/websocket');

class SocketServer {
  constructor(io, messageRepository) {
    this.io = io;
    this.webSocket = new WebSocket(io, messageRepository);
  }

  start() {
    this.io.on('connection', (socket) => {
      console.log('a user connected');
      socket.on('sendMessage', (msg) => {
        this.webSocket.handleSendMessage(msg);
      });
    });
  }
}

module.exports = SocketServer;