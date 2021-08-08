// Load required modules
// const http = require("http"); // http server core module
// const path = require("path");
// const express = require("express"); // web framework external module
// const express = require('express');
// const app = express();
// const apptwo = express();
// const http = require('http');

//  const server = http.createServer(app);
//  const { Server } = require("socket.io");
// const io = new Server(server);
// const port = 3000;
// const path = require('path');
//var sceneEl = document.querySelector('a-scene');

//app.use(express.static( path.join("/js" +  __dirname,  'public')));
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/leapcontrol.html');
// });
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/aframComp.js');
// });
//app.use(express.static(path.join(__dirname, 'public')));
//app.use("/aframComp", express.static(__dirname + '/aframComp'));
//app.use(express.static( path.join("/js" +  __dirname,  'public')));

// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);
// const port = 3000;
const path = require('path');
// console.log(path.join(__dirname,'/../public'));
const express = require('express');
const publicPath = path.join(__dirname,'/../public');
const app = express();

app.use(express.static(publicPath));

app.listen(3000, ()=>{
  console.log('Server is up on port 3000');
})

// server.listen(port, () => {
//   console.log('Server listening at port %d', port);
//   console.log(__dirname);
// });

// Routing
//app.use(express.static(path.join(__dirname + '/public')));
// app.get('/', (req, res) => {
//   res.sendFile(__dirname+ '/public');
// });
// io.on("connection", socket => {
//   console.log("user connected", socket.id);
//   //socket.emit("welcome", "hello and welcome");
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   }),
//   socket.on('chat message', (msg) => {
//     io.emit('chat message', msg);
//     console.log('message: ' + msg);
//   });
// });


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
// server.listen(port, () => {
//     console.log('listening on *:' + port);
//   });
  
  //io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets
