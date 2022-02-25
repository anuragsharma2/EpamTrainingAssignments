const Matchers={
    returnObject:function(){
        let obj={"id":100,"name":"ojasvi","age":20,"occupation":"student"};
        return obj;
    },
    returnArrayOfNames:function(){
        let arr=["anurag","harshit","ramanujan","bharat"];
        return arr;
    }
}
module.exports=Matchers;