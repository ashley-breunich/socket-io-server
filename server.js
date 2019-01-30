'use strict'

const PORT = process.env.port || 8080;

const io = require('socket.io')(PORT);

io.on('connection', (socket) => {
    console.log('Connected', socket.id);
    socket.on('troll', (payload) => {
        console.log('broadcasting', payload);
        io.emit('incoming', payload);
    })

});