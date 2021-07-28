/*
 modify code to not require push and enter so instance
*/

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 3000;
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/testjavascript.html');

});
io.on("connection", socket => {
  console.log("user connected", socket.id);


  });

server.listen(port, () => {
    console.log('listening on *:' + port);
  });
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  }),
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
});

// server.listen(3001, () => {
//   console.log('listening on *:3001');
// });
//io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets
