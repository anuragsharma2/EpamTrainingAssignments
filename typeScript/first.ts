
function add(id:number,x:number){
    return id+x;
}
let arr=new Array("hi","how","are","you","doing","fine","cool");
//console.log(arr);
for(let i of arr)
    console.log(i)
let min=arr[0];
let large2=arr[0];
for(let i in arr){   
    if(min>arr[i])
        min=arr[i];
}
function minOfTwo(x:number,y:number){
    if(x<y)
        return x;
    else 
        return y;    
}
function maxOfThree(x:number,y:number,z:number){
    if(x>y && x>z)
        return x;
    else if(y>x && y>z) 
        return y;
    else
        return z;        
}
let max=arr[0];
for(let i of arr){   
    if(max<i)
        max=i;
}
for(let i of arr){   
    if(large2<i && i<max)
        large2=i;
}
//console.log("minimun of two numbers 6,5 = "+minOfTwo(6,6.5));
//console.log(" max of three -1 ,4.0,7.5 ="+maxOfThree(-1,4.0,7.5))
//console.log("minimum element : "+min);
//console.log("second largest from array : "+large2);

