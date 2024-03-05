/*

The file module.js can be called the module in this case. Every module has an object called exports which should contain all the stuff you want to export from this module like variables or functions. In our case, we are defining a function in the module.js file and directly exporting it.

The using__module.js file imports the sayHello() function from module.js and stores it in the sayHello variable. To import something from a module, we use the require() method which accepts the path to the module. Now we can simply invoke the variable and pass a name as a parameter. Running the code in using__module.js file will produce the following output:

    Hello Indresh
    Hello Rohan


*/

//requiring from module.js

 const sayHello = require('/Users/indreshmr/Developer/Node-js/module/01_module');
sayHello("Indresh")
sayHello("Rohan")


//requiring from module.export.js

 const some__funtion = require('/Users/indreshmr/Developer/Node-js/module/03_module.export');
 some__funtion();
 //Even after exporting fn1 and fn2 we get the output of fn2 because that was the latest module.exports command. 





 //requiring from exporting_many_fns.js
 const multipleFns = require('./04.exporting_many_fns');
 multipleFns.driving(23);
 console.log(multipleFns.myInfo);
 console.log(multipleFns.myName);