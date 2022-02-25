var express=require('express');
var Sequelize=require('sequelize');
var cors=require('cors');

var app=express();
app.use(cors());
app.use(express.json());

const sequelize=new Sequelize("test","postgres","1234",{
    host:'localhost',
    dialect:'postgres',
    timezone:'+05:30',
    pool:{
        min:0,
        max:5,
        acquire:30000,
        idle:10000,
    }
})

let employees=sequelize.define('employees',{
    empId:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    name:Sequelize.STRING,
    department:Sequelize.STRING,
    designation:Sequelize.STRING,},
    {
        freezeTablename:true,
        timestamps:false
    })

app.get("/",(req,res)=>{
    console.log("hello");
    res.send("hello hi merging e and s")
})
app.get("/getAllEmployeeData",(req,res)=>{
    employees.findAll().then((data)=>{
        console.log("got all employees");
        res.status(200).send(data);
    }).catch((err)=>{
        console.log("error in getAll employees "+JSON.stringify(err));
        res.status(400).send(JSON.stringify(err))
    })
})
app.get("/getEmployeeById/:empId",(req,res)=>{
    console.log("hi");
    employees.findAll({where:{empId:req.params.empId}}).then((data)=>{
        console.log("got by Id ");
        res.status(200).send(data);
    }).catch((err)=>{
        console.log("error in get By name"+err);
        res.status(400).send(err)
    })
})
app.post("/insertEmployee",(req,res)=>{
    employees.create({empId:req.body.empId,name:req.body.name,department:req.body.department,designation:req.body.designation}).then(()=>{
        console.log("record inserted successfully ");
        res.status(202).send("inserted successfully");
    }).catch((err)=>{
        console.log("error in inserting "+err);
        res.status(400).send(err);
    })
})
app.delete("/deleteEmployeeById/:empId",(req,res)=>{
    console.log("inside delete"+req.params);
    employees.destroy({where:{empId:req.params.empId}}).then((data)=>{
        console.log("record deleted ");
        res.status(200).send("deleted successfully ")
    }).catch((err)=>{
        console.log("error in deleteing "+err);
        res.status(400).send(err);
    })
})
app.put("/updateEmployee/:id",(req,res)=>{
    employees.update({
        empId:req.body.empId,
        name:req.body.name,
        department:req.body.department,
        designation:req.body.designation
    },{where:{empId:req.params.id}}).then(()=>{
        console.log("upadted successfull ");
        res.status(202).send("record updated successfully ")
    }).catch((err)=>{
        console.log("error in updating "+err);
        res.status(400).send(err);
    })
})

app.listen(8001,()=>{
    console.log("server listening on port 8001 ");
})
