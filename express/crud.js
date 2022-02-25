var express=require('express');
var app=express();
app.use(express.json());

app.get('/getEmployees',(req,res)=>{
    console.log("in get Employees method");
    res.send("in getEmployees method ");
})
app.post('/insertEmployee',(req,res)=>{
    console.log("in insert Employee method");
    res.send("in insertEmployee method ");
})
app.put('/updateEmployee',(req,res)=>{
    console.log("in update Employee method");
    res.send("in updateEmployee method ");
})
app.delete('/deleteEmployees/:id',(req,res)=>{
    var id=req.params.id;
    str="In the delete Method of deleteEmployees with given ID: "+id
    console.log(str);
    res.send(str);
})
app.listen(8001,()=>{
    console.log("server listening on port 8001 ");
})