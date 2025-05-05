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
```

## 📁 Files

### 2. client.js
This file contains the TCP client logic.


```js
const net = require('net');
const readline = require('readline');

// Create connection to the server
const client = net.createConnection({ port: 5000 }, () => {
    console.log('✅ Connected to server');
});

// Set up input from command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Send user input to server
rl.on('line', (line) => {
    client.write(line);
});

// Receive data from server
client.on('data', (data) => {
    console.log('📬 Received from server:', data.toString());
});

client.on('end', () => {
    console.log('🛑 Disconnected from server');
});

client.on('error', (err) => {
    console.error('⚠️ Error:', err.message);
});
```

