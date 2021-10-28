// os module 

const os = require("os");

// propertis of os module
//info about current user 
const user = os.userInfo();
console.log(user);

// methos returns the system uptime in seconds
console.log(`the sysytem Uptime is ${ os.uptime() } seconds`)

const currrentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currrentOS);
