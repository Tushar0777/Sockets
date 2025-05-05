const net=require('net');
const readline=require('readline');


const client=net.createConnection({port:5000},()=>{
    console.log("✅ Connected to server");
});

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
