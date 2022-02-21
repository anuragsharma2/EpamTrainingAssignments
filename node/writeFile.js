var fs=require("fs");
var writeStream=fs.createWriteStream('write.txt');
writeStream.write("i am writing via node fs ");
writeStream.on('finish',()=>{
    console.log("after writing ");
});
writeStream.on('error',(err)=>{
    console.log("error while writing on to file "+err);
})