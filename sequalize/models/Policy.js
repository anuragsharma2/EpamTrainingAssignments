var Sequelize=require('sequelize');
var dbConfig=require('../db.config');

const sequelize=new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    timezone:'+05:30',
    pool:{
        min:dbConfig.pool.min,
        max:dbConfig.pool.max,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
})

let insurance=sequelize.define('insurance',{
    policyNumber:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    policyHolderName:Sequelize.STRING,
    policyAmount:Sequelize.INTEGER,
    maturityAmount:Sequelize.INTEGER,
    nominee:Sequelize.STRING},
    {
        freezeTableName:true,
        timestamps:false
    })/*
sequelize.authenticate().then(()=>{
    console.log("DB connect successfull  ");
}).catch((err)=>{
    console.log("error in DB connect "+err);
})

insurance.sync({force:true}).then(()=>{
    console.log(" insurance table created successfull ");
}).catch((err)=>{
    console.log("error in insurance table creation "+err);
})*/

module.exports={
    createPolicy: function(req,res){
        insurance.create({policyNumber:req.body.pNo,policyHolderName:req.body.pHolderName,policyAmount:req.body.pAmt,maturityAmount:req.body.maturityAmt,nominee:req.body.nominee}).then(()=>{
            console.log("policy created successfully ");
            res.status(201).send("inserted successfully");
        }).catch((err)=>{
            console.log("error while creating policy: "+err);
            res.status(400).send(err);
        })
    },
    getAllPolicies:function(res){
        insurance.findAll({raw:true}).then((data)=>{
            console.log("succeessfully got all policy ");
            console.log(data);
            res.status(200).send(data);
        }).catch((err)=>{
            console.log("error in getting all policy: "+err);
            res.status(400).send(err);
        })
    },
    getPolicyByNumber:function(req,res){
        insurance.findAll({where:{policyNumber:req.params.no}}).then((data)=>{
            console.log("got policy of policy no. "+req.params.no);
            res.status(200).send(data);
        }).catch((err)=>{
            console.log("error in getting policyBy Number"+err);
            res.status(400).send(err);
        })
    },
    updatePolicy:function(req,res){
        insurance.update({
            policyNumber:req.body.pNo,
            policyHolderName:req.body.pHolderName,
            policyAmount:req.body.pAmt,
            maturityAmount:req.body.maturityAmt,
            nominee:req.body.nominee
        },{where:{policyNumber:req.params.pNoToUpdate}}).then((data)=>{
            console.log("updated "+data+" no. of policies ");
            res.status(201).send("update successfull ");
        }).catch((err)=>{
            console.log("error while updating policy "+err);
            res.status(400).send(err);
        })
    },
    deletePolicy:function(req,res){
        insurance.destroy({where:{policyNumber:req.params.pNo}}).then((data)=>{
            console.log("deleted policy with policy Number: "+req.params.pNo);
            res.status(200).send("deleted policy")
        }).catch((err)=>{
            console.log("error while deleting policy "+err);
            res.status(400).send(err);
        })
    }
}