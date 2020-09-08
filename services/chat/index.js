const express = require('express');
const socketio = require('socket.io');
const SocketEvents = require('./socket-events/socketEvents');

const app = express();

const server = app.listen(4000, () => console.log('Listening for socket connections...'));

const io = socketio(server);

io.on('connection', (socket) => {
  SocketEvents.loadConnectionEvent(socket);
});
