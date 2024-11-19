const { Server } = require('socket.io');

const handleSocketConnection = (socket) => {
  console.log('A user connected');

  socket.on('chat_message', (message) => {
    console.log('Received message:', message);
    socket.broadcast.emit('chat_message', message);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
};

module.exports = { handleSocketConnection };
