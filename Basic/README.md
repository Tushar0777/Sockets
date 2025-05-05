# 📡 TCP Echo Chat (Node.js)

This is a simple TCP-based server-client chat application written in Node.js. It demonstrates how a server can handle incoming connections and echo back messages sent from clients using the `net` module.

---

## 🛠️ Features

- TCP server that accepts multiple client connections.
- Clients can send messages via command line.
- Server echoes messages back to clients.
- Graceful error handling and connection logs.

---

## 📁 Files

### 1. `server.js`

This file contains the TCP server logic.

```js
const net = require('net');

// Create a TCP server
const server = net.createServer((socket) => {
    console.log('🟢 Client connected:', socket.remoteAddress + ':' + socket.remotePort);

    socket.on('data', (data) => {
        console.log('📨 Received from client:', data.toString());
        socket.write('Server says: ' + data); // echo back to client
    });

    socket.on('end', () => {
        console.log('🔴 Client disconnected');
    });

    socket.on('error', (err) => {
        console.error('⚠️ Error:', err.message);
    });
});

// Start the server on port 5000
server.listen(5000, () => {
    console.log('🚀 Server listening on port 5000');
});
