var express=require('express');
var app=express();
var cor=require('cors');

app.use(express.json());
//app.use(cors());
/*
app.post("/login_post",(req,res)=>{
    console.log("in login post ");
    var uid=req.body.uid;
    var pwd=req.body.pwd;
    str=`given uid ${uid} password ${pwd}`;
    console.log(str);
    strMessage="Invalid credentials"
    if(uid=="anurag" && pwd=="admin")
        strMessage="valid user ";
    res.send(strMessage); 
})*/
app.get('/login',(req,res)=>{
    console.log("login of express");
    var uid=req.query.uid;
    var pwd=req.query.pwd;
    console.log("your UID :"+uid+" password : "+pwd);
    strResponse="Invalid user credentials ";
    if(uid=='anurag' && pwd== 'admin')
        strResponse="Valid user welcome "+uid;
    res.send(strResponse);
})
app.listen(8001,()=>{
    console.log("server listening on 8001 port ");
})