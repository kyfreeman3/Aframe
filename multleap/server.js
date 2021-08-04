// Load required modules
// const http = require("http"); // http server core module
// const path = require("path");
// const express = require("express"); // web framework external module
const express = require('express');
const app = express();
const http = require('http');

 const server = http.createServer(app);
 const { Server } = require("socket.io");
const io = new Server(server);
const port = 3000;
const path = require('path');
//var sceneEl = document.querySelector('a-scene');

app.use(express.static( path.join("/js" +  __dirname,  'public')));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/leapcontrol.html');
});
//app.use(express.static( path.join("/js" +  __dirname,  'public')));

io.on("connection", socket => {
  console.log("user connected", socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  }),
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
  });


  // socket.on('disconnect', () => {
  //   console.log('user disconnected');
  // }),
  // socket.on('chat message', (msg) => {
  //   io.emit('chat message', msg);
  //   console.log('message: ' + msg);
  // });

// webServer.listen(port, () => {
//   console.log("listening on http://localhost:" + port);
// });
server.listen(port, () => {
    console.log('listening on *:' + port);
  });
  
  //io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets
