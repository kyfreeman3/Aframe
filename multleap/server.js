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

//var sceneEl = document.querySelector('a-scene');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/leapcontrol.html');

});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/aframComp.js');

});

io.on("connection", socket => {
  console.log("user connected", socket.id);


  });



// webServer.listen(port, () => {
//   console.log("listening on http://localhost:" + port);
// });
server.listen(port, () => {
    console.log('listening on *:' + port);
  });
  
  //io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets
