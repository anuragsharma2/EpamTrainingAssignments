var express=require('express');
const Sequelize=require('sequelize');
var cors=require('cors');
var app=express();
app.use(cors());
app.use(express.json());

// getting (ORM) sequelize instance to connect with DB = test
var sequelize=new Sequelize("eCommerceDb","postgres","1234",{
    host:"localhost",
    dialect:'postgres',
    pool:{
        min:0,
        max:5,
        acquire:30000,
        idle:10000
    }
})

//authenticating with DB with above instance
/*
sequelize.authenticate().then(()=>{
    console.log("connected to DB successfully ");
}).catch((err)=>{
    console.log("error in connecting to DB: "+err);
})*/
//defining model of table to use for users from DB 
let users=sequelize.define('users',{
    userId:{
        primaryKey:true,
        type:Sequelize.STRING
    },
    password:Sequelize.STRING,
    firstName:Sequelize.STRING,
    lastName:Sequelize.STRING,
    gender:Sequelize.STRING,
    emailId:Sequelize.STRING,
    mobileNumber:Sequelize.STRING,
    address:Sequelize.STRING
},{
    freezeTableName:true,
    timestamps:false
})
let products=sequelize.define('products',{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    productTitle:Sequelize.TEXT,
    rating:Sequelize.DECIMAL,
    productCost:Sequelize.DOUBLE,
    productCategory:Sequelize.STRING,
    productImages:Sequelize.TEXT,
    productDescription:Sequelize.TEXT,
},{
    freezeTableName:true,
    timestamps:false
})
//creating table 
/*
products.sync({force:true}).then((data)=>{
    console.log("created user table successfully ");
}).catch((err)=>{
    console.log("error in creating table: "+err);
})*/
//API for creating new user
app.post("/createUser",(req,res)=>{
    users.create({userId:req.body.userId,password:req.body.password,firstName:req.body.firstName,lastName:req.body.lastName,gender:req.body.gender,emailId:req.body.emailId,mobileNumber:req.body.mobileNumber,address:req.body.address}).then(()=>{
        console.log("created new user successfully ");
        res.status(201).send("registeration successfull");
    }).catch((err)=>{
        console.log("error in creating user: "+err);
        res.status(406).send(err);
    })
})
// API for validating(checking) user in login
let op=Sequelize.Op;
app.post("/validateUser",(req,res)=>{
    users.findAll({where:{[op.and]:[{userId:req.body.userId},{password:req.body.password}]},raw:true}).then((data)=>{
        if(data.length!=0){
            console.log("valid user");
            res.status(202).send(data);
        }
        else{
            res.status(401).send("invalid credentials");
        }
    }).catch((err)=>{
        console.log("error in login: "+err);
    })
})
app.get("/getAllProducts",(req,res)=>{
    products.findAll().then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        console.log("error in getting all products "+err);
        res.status(400).send("error while getting all products");
    })
})
app.get("/getProductsByCategory/:category",(req,res)=>{
    products.findAll({where:{productCategory:req.params.category}}).then((data)=>{
        console.log("got products by category");
        res.status(200).send(data);
    }).catch((err)=>{
        console.log(err);
        res.status(400).send(err);
    })
})
app.listen(8001,()=>{
    console.log("E commerce server listening on port 8001...");
})