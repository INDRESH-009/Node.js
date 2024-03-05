//The os module provides the methids or information with wich you can get the information of the operating system

//importing the os module
const os = require('os');

//os.uptime()
//This function returns the number of seconds the system has been running since it was last rebooted - This is called uptime
const uptime = os.uptime();

//os.userInfo()
//It gives the information of the current user . It return an object which contains detailes like 
    /*
        1.userid - uid
        2.groupid - gid
        3.username
        4.home directory
        5.Default sell
    
    */
const userInfo = os.userInfo();



//lets bundle other data into an object for ease of printing 
const otherinfo = {
    name : os.type(),           //name of the opertaing system
    release : os.release(),     //release version of the operating system
    totMem : os.totalmem(),     //total memory available in bytes
    freeMem : os.freemem(),     //total at of free memory available in bytes
}
console.log(userInfo);
console.log(uptime);
console.log(otherinfo);