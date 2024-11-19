const express = require('express');
const router = express.Router();
const { Server } = require('socket.io');
const http = require('http');
const server = http.createServer();

const chatService = require('../services/chatService');

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('new-user', (username) => {
    chatService.addUser(socket.id, username);
    io.emit('user-list', chatService.getUsers());
  });

  socket.on('send-message', (messageData) => {
    console.log(`Message from ${messageData.username}:`, messageData.message);
    io.emit('receive-message', chatService.sendMessageToAll(messageData)); // Broadcast message to all clients
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    chatService.removeUser(socket.id);
    io.emit('user-list', chatService.getUsers());
  });
});

module.exports = router;
