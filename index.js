const express = require("express");

const app = express();

const http = require("http");

const expressServer = http.createServer(app);
const PORT = 3000;
// socket.io
const { Server } = require("socket.io");
const io = new Server(expressServer);

// // connect socket
// io.on("connection", (socket) => {
//   console.log(`new user connected`);

//   setTimeout(() => {
//     socket.send(`Learn socket app (server to client) 1`);
//   }, 10000);
//   setInterval(() => {
//     socket.send(
//       `Learn socket app (server to client) number: ${Math.floor(
//         Math.random() * 100
//       )}`
//     );
//   }, 1000);

//   setInterval(() => {
//     const d = new Date();
//     const t = d.getTime();
//     socket.send(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ok ${t}`);
//   }, 100);

//   find socket clint List
//   setInterval(function () {
//     socket.send(`clint list is: ${[...io.sockets.sockets.keys()].length}`);
//   }, 100);

//   custom event
//   setInterval(() => {
//     socket.emit("myEvent", Math.floor(Math.random() * 1000));
//   }, 100);

// receive message from client
//   socket.on("message", (mes) => {
//     console.log(mes);
//   });

// receive message from server with custom event
// socket.on("customEvent", (mes) => {
//   console.log(mes);
// });

//   socket.on("disconnect", () => {
//     console.log(`user disconnected`);
//   });
// });

// socket broadcast
// io.on("connection", (socket) => {
//   console.log(`connection established`);
// broadcast all Users
// io.sockets.emit("myBroadcast", "hello everyone");

//   socket.on("disconnect", () => {
//     console.log(`user disconnected`);
//   });
// });

// create namespace

const buyNsp1 = io.of("/buy");
const sellNsp1 = io.of("/sell");

buyNsp1.on("connection", (socket) => {
  buyNsp1.emit("myBroadcast", "hello everyone: buyNsp1");
});
sellNsp1.on("connection", (socket) => {
  sellNsp1.emit("myBroadcast", "hello everyone: sellNsp1");
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

expressServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} at http://localhost:${PORT}`);
});
