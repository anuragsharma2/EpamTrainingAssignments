var stream=require('stream');
var fs=require('fs');
var zlib=require('zlib');

stream.pipeline(
    fs.createReadStream('input.txt'),
    zlib.createGzip(),
    fs.createWriteStream('input.tar.gz'),
    (err)=>{
        if(err)
            console.log("there is an error ");
        else
            console.log("pipeline write completed ");    
    }
)