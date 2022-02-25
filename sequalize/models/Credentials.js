var Sequelize=require('sequelize');
var dbConfig=require('../db.config');

const sequelize=new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    timezone:'+05:30',
    pool:dbConfig.pool
})

let users=sequelize.define('users',{
    userId:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    password:Sequelize.STRING,
    role:Sequelize.STRING,
},
    {
        timestamps:false,
        freezeTableName:true
    })
/*   
sequelize.authenticate().then(()=>{
    console.log("DB connect successfull  ");
}).catch((err)=>{
    console.log("error in DB connect "+err);
});

users.sync({force:true}).then(()=>{
    console.log("user table created successfully ");
}).catch((err)=>{
    console.log("error in user table creation "+err);
})
*/
let op=Sequelize.Op;
module.exports={
validateUser:function(req,res){
    users.findAll({where:{[op.and]:[{userId:req.body.userId},{password:req.body.password}]}}).then((data)=>{
        console.log("found user "+JSON.stringify(data));
        if(data.length!=0)
            res.status(200).send("Valid user ");
        else
            res.status(200).send("invalid user ");
    }).catch((err)=>{
        console.log("validate user error: "+err);
        res.status(400).send("Invalid user")
    })
},
createUser:function (req,res){
    users.create({userId:req.body.userId,password:req.body.password,role:req.body.role}).then(()=>{
        console.log("user Created successfully ");
        res.status(201).send("user registered successfully ");
    }).catch((err)=>{
        console.log("error in creating user: "+err);
        res.status(400).send(err);
    })
}
}