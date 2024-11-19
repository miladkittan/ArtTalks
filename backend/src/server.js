const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http');
const pictureRoutes = require('./routes/pictureRoutes');
const chatRoutes = require('./routes/chatRoutes');
const { Server } = require('socket.io');
const { handleSocketConnection } = require('./socket');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', handleSocketConnection);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', pictureRoutes);
app.use('/chat', chatRoutes);

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
