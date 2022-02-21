var url=require('url');
address="http://localhost:4200/product?pid=1234&pname=toy";
var urlParse=url.parse(address,true);
console.log(urlParse);
console.log("host: "+urlParse.host);
console.log("path: "+urlParse.path +" path name : "+urlParse.pathname);
console.log("product id pid: "+urlParse.query.pid);
console.log("product name pname: "+urlParse.query.pname);
