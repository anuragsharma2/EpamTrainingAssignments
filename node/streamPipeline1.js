var stream=require('stream');
var fs=require('fs');
var zlib=require('zlib');

stream.pipeline(
    fs.createReadStream('input.tar.gz'),
    zlib.createGzip(),
    fs.createWriteStream('output.txt'),
    (err)=>{
        if(err)
            console.log("there is an error ");
        else
            console.log("pipeline write completed ");    
    }
)