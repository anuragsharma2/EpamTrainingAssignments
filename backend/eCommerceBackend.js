var express=require('express');
const Sequelize=require('sequelize');
var cors=require('cors');
const nodeMailer=require('nodemailer');
const SendmailTransport = require('nodemailer/lib/sendmail-transport');
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
    mobileNumber:Sequelize.STRING,
    emailId:Sequelize.STRING,
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

let order=sequelize.define('orders',{
    productId:Sequelize.INTEGER,
    quantity:Sequelize.INTEGER,
    userId:Sequelize.STRING,
    createdAt:Sequelize.STRING
},{
    freezeTableName:true,
    timestamps:false
})
//creating table 
/*
order.sync({force:true}).then((data)=>{
    console.log("created orders table successfully ");
}).catch((err)=>{
    console.log("error in creating table: "+err);
})
*/
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
app.get("/getUserByUserId/:userId",(req,res)=>{
    users.findAll({where:{userId:req.params.userId}}).then((data)=>{
        res.send(data);
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
app.post("/storeOrder",(req,res)=>{
    console.log(req.body.order)
    order.bulkCreate(req.body.order).then((data)=>{
        console.log("order stored in DB");
        res.status(202).send("order placed");
    })
})
app.get("/getPreviousOrders",(req,res)=>{
    console.log("inside previous orders");
    order.findAll({group:["createdAt"],order:["createdAt","DESC"]}).then((data)=>{
        res.status(200).send(data);
    })
})
async function sendMail(order,user,callback){
    let transporter=nodeMailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth:{
            user:"anuragww99@gmail.com",
            pass:''
        }
    });
    let s1=`order with userId: ${user.userId}<br> <h3>details</h3><br><table style="border:2px black solid;"><tbody><thead><th>product</th>
    <th>Cost </th>
    <th>Quantity</th></thead>`;
    let s2=``;
    for(let i=0;i<order.length;i++){
        s2+=`<tr><td>${order[i].product.productTitle}</td><td>Rs ${order[i].product.productCost}</td><td>${order[i].quantity}</td></tr>`;
    }
    let s3=`</tbody></table>`;
    order
    let mailOptions={
        from:"Bharat Mart",
        to:user.emailId,
        subject:"your order was placed successfully",
        html:s1+s2+s3
    };
    let info=await transporter.sendMail(mailOptions);
    callback(info);
}
app.post("/sendEmail",(req,res)=>{
    console.log("sending email");
    let user=req.body.user;
    let order=req.body.order;
    sendMail(order,user,(info)=>{
        console.log("the mail has been send");
        res.status(200).send(info);
    })
})

app.listen(8001,()=>{
    console.log("E commerce server listening on port 8001...");
})