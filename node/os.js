var os=require('os');
console.log("os architecture: "+os.arch());
console.log("number of CPUs: "+JSON.stringify(os.cpus()));
console.log("free memory : "+os.freemem);