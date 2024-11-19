import { io } from 'socket.io-client';

const socket = io('http://localhost:5001');

export const sendMessage = (messageData) => {
  socket.emit('chat_message', messageData);
};

export const listenForMessages = (callback) => {
  socket.on('chat_message', (messageData) => {
    callback(messageData);
  });
};

export const disconnectSocket = () => {
  socket.disconnect();
};
