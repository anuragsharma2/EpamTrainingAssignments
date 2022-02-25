var credentials=require('./models/Credentials');
var policy=require('./models/Policy');
var express=require('express');

app=express();
app.use(express.json());

app.get("/getAllPolicies",(req,res)=>{
    policy.getAllPolicies(res);
})
app.get("/PolicyByNumber/:no",(req,res)=>{
    policy.getPolicyByNumber(req,res);
})
app.post("/newPolicy",(req,res)=>{
    policy.createPolicy(req,res);
})
app.put("/updatePolicy/:pNoToUpdate",(req,res)=>{
    policy.updatePolicy(req,res);
})
app.delete("/deletePolicy/:pNo",(req,res)=>{
    policy.deletePolicy(req,res);
})
app.post("/register",(req,res)=>{
    credentials.createUser(req,res);
})
app.get("/login",(req,res)=>{
    credentials.validateUser(req,res);
})
app.listen(8001,()=>{
    console.log("app listening on 8001 ");
})