var net=require('net');
var server=net.createServer((connection)=>{         //connection - eventemitter
    console.log("client is connected ");
    connection.on('data',(data)=>{
        console.log("data from client : "+data.toString());
    });
    connection.write("message sent from server ");
    connection.on('end',()=>{
        console.log("client disconnected ");
    });
});
server.listen(8100,()=>{
    console.log("server is listening on port 8100 ");
})