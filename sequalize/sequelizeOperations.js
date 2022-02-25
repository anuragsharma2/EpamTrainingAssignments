const Sequelize=require('sequelize');
const dbConfig=require('./db.config');

const sequelize=new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    pool:{
        min:dbConfig.pool.min,
        max:dbConfig.pool.max,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
})
/*
//connecting to DB
sequelize.authenticate().then(()=>{
    console.log("connected successfully with DB");
}).catch((err)=>{
    console.log("unable to connect with DB ");
})
*/
//define structure  of table to be created in MYSQL
let userSequelize=sequelize.define('usersequelize',{
    userId:Sequelize.STRING,
    password:Sequelize.STRING,},
    {
        timestamps:false,
        freezeTableName:true
    }
);

//create table from sequelize in mysql force-it will drop old table and create new one 
/*
userSequelize.sync({force:true}).then(()=>{
    console.log("table is successfully created ");
}).catch((err)=>{
    console.log("error while creating a table "+ err);
})
*/
let test1=sequelize.define('test1',{
    Id:{
        primarykey:true,
        type:Sequelize.INTEGER
    },
    emailID:Sequelize.STRING,
    password:Sequelize.STRING
},
    {
        freezeTableName:true,
        timestamps:false
    }
)/*
test1.sync().then(()=>{
    console.log("table test1 is defined successfully ");
}).catch((err)=>{
    console.log("error while creating table: "+err);
})*/
//where query in sequelize
/*
test1.findAll({attributes:['Id','password'],order:['emailId'],raw:true}).then((data)=>{
        console.log(data);
}).catch((err)=>{
    console.log("error in receiving data: "+err);
})*/
/*
test1.findByPk(203).then((data)=>{
    console.log(data.dataValues);
}).catch((err)=>{
    console.log("error in find by PK: "+err);
})*/
//native sql query using query
/*
sequelize.query("select * from `test1` ",{type:Sequelize.QueryTypes.SELECT}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("error for in native sql query: "+err );
});*/
const op=Sequelize.Op;
//using operator and in where condition
/*
test1.findAll({where:{[op.and]:[{emailId:'ojas@gmail.com'},{password:'ojas123'}]},raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("error in and operator findall: "+err);
})*/
/*
userSequelize.create({
    userId: "sanjeet@gmail.com",
    password: "sanjeet123"}).then((data)=>{
        console.log(data);
    }).catch(()=>{
        console.log("error in create data ");
    })*/
    //updating data
    /*
userSequelize.update({ password:'tantee123'},
                       {where:{userId:'sanjeet@gmail.com'}} ).then((data)=>{
                           console.log("updated "+data +" record");
                       })    */
    userSequelize.destroy({
    where:{userId:"anurag@gmail.com"}
}).then((data)=>{
    console.log("deleted "+data+" no. of records");
}).catch((err)=>{
    console.log("error in deletion ");
})

