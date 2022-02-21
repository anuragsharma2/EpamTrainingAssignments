var fs=require('fs');
var data="";
var readerStream=new fs.createReadStream('input.txt');
readerStream.on('data',(readData)=>{
    data=readData;
})
readerStream.on('end',()=>{
    console.log("read data "+data);
})
readerStream.on('error',(err)=>{
    console.log("error while reading");
})
