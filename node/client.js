const { write } = require('fs');
var net=require('net');
var connection=net.connect({port:8100},()=>{
    console.log("client is connected to server on 8100 port ");
});
connection.on('data',(data)=>{
    console.log("data received from server connection data : "+data);
});
connection.write("this is the message from client to server thanks for the connection write",(err)=>{
    if(err)
    console.log("error in writing on server "+err);
});
connection.on('end',()=>{
    console.log("client is disconnecting from server connection end");
})