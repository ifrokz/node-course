const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const {isRealString} = require('./utils/validation.js');
const {Users} = require('./utils/users');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const users = new Users(); 

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  // console.log('New user connected');
  
  socket.on('join', (params, callback)=>{
    params.room = params.room.toLowerCase();

    if(!isRealString(params.name) || !isRealString(params.room)){
      callback('Name and room name are required.');
    };
    socket.join(params.room);
    users.removeUser(socket.id);
    const addUser = users.addUser(socket.id, params.name, params.room);
    if(!addUser){
      callback('Username actually in use.')
    };
    io.emit('newRoomsList', users.getRoomsList());
    io.to(params.room).emit('updateUserList', users.getUserList(params.room));
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
    socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', `${params.name} has joined`));
    callback();

    // io.emit('getRooms')
  });

  socket.on('createMessage', (message, callback) => {
    const user = users.getUser(socket.id);

    if(user && isRealString(message.text)){
      io.to(user.room).emit('newMessage', generateMessage(user.name, message.text));
    }
    
    callback();
  });

  socket.on('createLocationMessage', (coords) => {
    const user = users.getUser(socket.id);

    if(user){
      io.to(user.room).emit('newLocationMessage', generateLocationMessage(user.name, coords.latitude, coords.longitude));
    }
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');

    const user = users.removeUser(socket.id);
    io.emit('newRoomsList', users.getRoomsList());
    
    if(user){
      io.to(user.room).emit('updateUserList', users.getUserList(user.room));
      io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has left.`));
    }
  });

  socket.on('getRoomsList', () => {
    socket.emit('newRoomsList', users.getRoomsList());
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
