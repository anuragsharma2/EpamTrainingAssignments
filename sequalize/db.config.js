
module.exports={
    DB:"test",
    USER:"postgres",
    PASSWORD:"1234",
    HOST:"localhost",
    dialect:"postgres",
    pool:{
        min:0,
        max:5,
        acquire:30000,
        idle:10000
    }
}