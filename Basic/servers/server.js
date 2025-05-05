const net=require('net');

console.log(net);

const server=net.createServer((socket)=>{
    console.log('🟢 Client connected:',socket.remoteAddress + ":" + socket.remotePort);

    socket.on('data',(data)=>{
        console.log('📨 Received from client:', data.toString());
        //console.log("data",data);
        socket.write('server says'+ data);
    });
    socket.on('end',()=>{
        console.log("🔴 Client disconnected");
    });

    socket.on('error', (err) => {
        console.error('⚠️ Error:', err.message);
    });
})

server.listen(5000,()=>{
    console.log("🚀 Server listening on port 5000");
})
