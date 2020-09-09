const express = require('express'),
  socketio = require('socket.io'),
  cors = require('cors'),
  dotenv = require('dotenv'),
  SocketEvents = require('./socket-events/socketEvents'),
  application = express();

// Load environment variables.
dotenv.config();

// Cors middleware.
application.use(cors());

// Body parsing middleware.
application.use(express.json());

const server = application.listen(process.env.PORT, () => console.log('Listening...'));
const io = socketio(server);

io.on('connection', (socket) => {
  SocketEvents.loadConnectionEvent(socket);
});
