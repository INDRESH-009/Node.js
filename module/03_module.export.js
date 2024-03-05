//In this file we will understand how module.export is used in detail - How we can export one variable/function and how we can export many 
/*
module.export is a special object in nodejs that helps us to create modules that contains functions , varibales , objects etc . These modules once created can be required by other files.

In the module.js file we created and exported a module that constains the function sayHello . The file using__module required that module using the [require('./module.js')] . In this case we had only 1 function in the file and we exported it completely ,



but what if we have many other functions / varibaes or objects etc . In that case we can use module.export object many times one after other because it overwrites the previous command . 

------------------------------Wrong way to export multiple elements as modules---------------------------

function fn1(){
    console.log("Hello from function 1 ");
}
function fn2(){
    console.log("Hello from function 2");
}
//first export
module.export = fn1;
//Second export
module.export = fn2;

--------------------------------------end---------------------------------------
In this example, we first export fn1(). But we then overwrite module.exports with a new function - fn2(). As a result, only the second export statement will take effect, and the fn1() function will not be exported.
*/

 function fn1(){
     console.log("Hello from function 1 ");
 }
 function fn2(){
     console.log("Hello from function 2");
 }
 const abc = {
    lang : "nodejs",
    editor : "vscode",
 }
 //first export
 module.exports = fn1
 //Second export
 module.exports = fn2
 //third export
 module.exports = abc
 
 


