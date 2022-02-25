var express=require('express');
var app=express();

app.use('/middleware',(req,res,next)=>{
    console.log("pre filter 1st middleware");
    next();
})
app.use('/middleware',(req,res,next)=>{
    console.log("middleware successfull 2nd middleware");
    next();
})
app.use('/middleware',(req,res,next)=>{
    console.log("3rd middleware");
    next();
})
app.use('/middleware',(req,res,next)=>{
    console.log("post filter of middleware 4th middleware last");
    res.send("middleware successful")
})
app.listen(8001,()=>{
    console.log("server listening on port 8001 ");
})