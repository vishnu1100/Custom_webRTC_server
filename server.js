const http = require('http');
const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

// Apply CORS middleware for HTTP requests
app.use(cors());

// Configure CORS for Socket.IO
const io = new Server(server, {
    cors: {
        origin: "*", // Allow your frontend origin
        methods: ["GET", "POST"], // Allowed HTTP methods
    },
});

const rooms = {};

app.use(express.static(__dirname)); // Serve static files (index.html, etc.)

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('create-room', (roomID) => {
        if (rooms[roomID]) {
            socket.emit('room-exists');
        } else {
            rooms[roomID] = [socket.id];
            socket.join(roomID);
            socket.emit('room-created', roomID);
        }
    });

    socket.on('join-room', (roomID) => {
        if (rooms[roomID]) {
            rooms[roomID].push(socket.id);
            socket.join(roomID);

            // Notify the new user about existing users
            socket.emit('existing-users', rooms[roomID].filter((id) => id !== socket.id));

            // Notify existing users about the new user
            socket.to(roomID).emit('user-joined', socket.id);
        } else {
            socket.emit('room-not-found');
        }
    });

    socket.on('signal', ({ signalData, targetID }) => {
        io.to(targetID).emit('signal', { signalData, sourceID: socket.id });
    });

    socket.on('disconnect', () => {
        for (const roomID in rooms) {
            const index = rooms[roomID].indexOf(socket.id);
            if (index !== -1) {
                rooms[roomID].splice(index, 1);
                socket.to(roomID).emit('user-left', socket.id);
                if (rooms[roomID].length === 0) {
                    delete rooms[roomID];
                }
                break;
            }
        }
    });
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
