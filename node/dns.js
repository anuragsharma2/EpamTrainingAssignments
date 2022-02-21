var dns=require('dns');
dns.lookup('www.facebook.com',(err,address,family)=>{
    console.log("facebook dns address  :"+address);
    console.log("family : "+family);
})