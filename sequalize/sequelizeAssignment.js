const dbConfig=require('./db.config.js');
const Sequelize=require('sequelize');
const sequelize=new Sequelize("test","root","1234",{
    host:"localhost",
    dialect:"mysql",
    timezone: '+05:30',
    pool:{
        min:0,
        max:5,
        acquire:30000,
        idle:10000,
    }
})
/* // connecting Via sequelize(ORM) instance by and Authenticating to DB 
sequelize.authenticate().then(()=>{
    console.log("db connected successfully: ");
}).catch((err)=>{
    console.log("error in authenticating DB: "+err);
})*/
//defining structure of table to be created 
let students=sequelize.define('students',{
    studentId:Sequelize.INTEGER,
    name:Sequelize.STRING,
    stream:Sequelize.STRING,
    marks:Sequelize.INTEGER
});
//defining movie model
let movie=sequelize.define('movie',{
    movieId:{
        type:Sequelize.INTEGER,
        primarykey:true
    },
    movieName:Sequelize.STRING,
    typeOfMovie:Sequelize.STRING,
    language:Sequelize.STRING,
    cast:Sequelize.STRING,
    },{
        timestamps:false,
        freezeTableName:true,
    }); 
    //defining employee table model
let employees=sequelize.define('employees',{
    empId:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    name:Sequelize.STRING,
    department:Sequelize.STRING,
    designation:Sequelize.STRING},
    {
        timestamps:false,
        freezeTableName:true
    })  

    /*
employees.destroy({where:{name:"ojas"}}).then((data)=>{
    console.log("no. of records deleted "+data);
})    */
    /*
employees.update({name:"Anurag sharma"},{where:{name:"anurag"}}).then((data)=>{
    console.log("updated name to full name records updated "+data);
})    */
    
    
    /*
let emp=employees.build({empId:"1500",name:"kanha",department:"BIO",designation:"scientist"})
emp.save();*/
    /*
employees.bulkCreate([
    {empId:1100,name:"anurag",department:"IT",designation:"SD"},
    {empId:1200,name:"ojas",department:"BIO",designation:"Dr."},
    {empId:1300,name:"harshit",department:"mechanical",designation:"Engineer"},
    {empId:1400,name:"aditya",department:"safety",designation:"head safety"},
]).then(()=>{
    console.log("created  successfully");
})*/
let op=Sequelize.Op;
/*
students.findAll({where:{[op.and]:[{stream:'CSE'},{marks:{[op.gt]:75}}]},raw:true}).then((data)=>{
    console.log("name with it string of employees : ");
    console.log(data);
})*/
// create table in mysql using sequelize
sequelize.sync().then(()=>{
    students.drop();
})
/*
employees.sync({force:true}).then((data)=>{
    console.log("employee table is created : "+data);
}).catch((err)=>{
    console.log("error in creating or syncing table to sql: "+err);
})*/
//adding students one by one using create
/*
students.bulkCreate([
    {
        studentId:12,
        name:'harshit',
        stream:'mechanical',
        marks:60
    },
    {
        studentId:13,
        name:'sahu',
        stream:'CSE',
        marks:60
    },
    {
        studentId:15,
        name:'rishi',
        stream:'CSE',
        marks:80
    },
    {
        studentId:16,
        name:'sameer',
        stream:'CSE',
        marks:90
    },
    {
        studentId:14,
        name:'sahil',
        stream:'CSE',
        marks:75
    }
]).then(()=>{
    console.log("record inserted successfully");
}).catch((err)=>{
    console.log("error in inserting the record: "+err);
})*/
// adding data by buulkCreate method
/*
movie.bulkCreate([
    {movieId:1001,movieName:"Man who knew infinity",typeOfMovie:"Scifi",language:"english",cast:"dev patel"},
    {movieId:1002,movieName:"Avengers",typeOfMovie:"adventurous",language:"english",cast:"Robert downey jr."},
    {movieId:1003,movieName:"hera pheri",typeOfMovie:"comedy",language:"hindi",cast:"akshay kumar"},
    {movieId:1004,movieName:"andhadhun",typeOfMovie:"thriller",language:"hindi",cast:"Ayushman khurana"},
]).then(()=>{
    console.log("movie added successfully ");
}).catch((err)=>{
    console.log("error while adding through bulkcreate: "+err);
})
movie.findAll().then((data)=>{
    console.log("movies tables data :");
    console.log(data);
})*/