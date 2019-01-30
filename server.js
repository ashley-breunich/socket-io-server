'use strict'

const express = require('express');
const socketIO = require('socket.io');
const PORT = process.env.port || 8080;

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('Connected', socket.id);
    socket.on('troll', (payload) => {
        console.log('broadcasting', payload);
        io.emit('incoming', payload);
    })

});


// const PORT = process.env.port || 8080;

// const io = require('socket.io')(PORT);

// io.on('connection', (socket) => {
//     console.log('Connected', socket.id);
//     socket.on('troll', (payload) => {
//         console.log('broadcasting', payload);
//         io.emit('incoming', payload);
//     })

// });