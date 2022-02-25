var express=require('express');
var app=express();
app.use(express.json());

employees=[{
    "id": 1,
    "name": "ojasvi sharma",
    "department": "pcb",
    "designation": "student"
  },
  {
    "id": 2,
    "name": "anand sachan",
    "department": "IT",
    "designation": "SE"
  },
  {
    "id": 3,
    "name": "harshit sharma",
    "department": "mechanical",
    "designation": "student"
  },
  {
    "id": 4,
    "name": "suraj ",
    "department": "IT",
    "designation": "m tech."
  }]

app.get('/getAllEmployeeData',(req,res)=>{
    str=``;
    for(let i=0;i<employees.length;i++){
        str+=`${employees[i].id} ${employees[i].name} ${employees[i].department} ${employees[i].designation} <br> `
    }
    console.log("in get Employees method");
    res.send(employees);
})
app.post("/totalSalary",(req,res)=>{
    console.log("inside totalSalary");
    let totalSalary=req.body.basic+req.body.hra+req.body.da-req.body.it-req.body.pf;
    let str=`total salary= ${totalSalary}`;
    res.send(str);
})
app.get("/getEmployeeById/:id",(req,res)=>{
    console.log("inside getEmployeeById");
    for(let i=0;i<employees.length;i++)
        if(employees[i].id==req.params.id){
          res.send(employees[i]);
          break;
    }
})
app.get("/getEmployeeByName/:name",(req,res)=>{
    console.log("inside getEmployeeByName: "+req.params.name);
    for(let i=0;i<employees.length;i++)
        if(employees[i].name==req.params.name){
          res.send(employees[i]);
          break;
    }
})
app.post("/insertEmployeeData",(req,res)=>{
    console.log("inside insertEmployeeData ");
        employees.push(req.body.employee);
    res.send("Record inserted successfully");    
})
app.put("/updateEmployeeData",(req,res)=>{
    console.log("inside update Data");
    for(let i=0;i<employees.length;i++)
        if(employees[i].id==req.body.id){
            employees[i].name=req.body.name;
            employees[i].department=req.body.department;
            employees[i].designation=req.body.designation;
            break;
    }
    res.send("Record updated successfully")
})/
app.delete("/deleteRecord/:id",(req,res)=>{
    console.log("inside delete Employee with id : "+req.params.id);
    for(let i=0;i<employees.length;i++)
        if(employees[i].id==req.params.id){
          employees.splice(i,1);
          res.send("record deleted successfully");
          break;
    }
})

app.listen(8001,()=>{
    console.log("employee server listening on port 8001");
})