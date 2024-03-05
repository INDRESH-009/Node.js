//What are modules 
/*
Modules are reusable block of code that has a specific usecase or functionality 
A module may contain - varibale , function , classes , objects or any other code that can fulfill a particular task or function 

//What is the purpose of using modules 
The primary purpose of using modules is to organise our code into smaller managable parts.
Modules can be imported anytime and can be used flexibly across multiple projects as reusable units 


//Concept of modules 
To understand this, consider this example: Let's say you have defined lots of functions in your code that works with a huge volume of JSON data.

Losing your sleep and increased anxiety levels are common side effects of keeping all this stuff (functions + data + some other logic) in one single file.

So you, being a clever programmer, thought of making a separate file for the JSON data and a separate file for storing all the functions. Now, you can simply import the data and the functions whenever you want and use them accordingly. This method increases efficiency as your file size reduces drastically. This is the concept of modules!
*/


//Creating our own module 
function sayHello(name){
    console.log(`Hello ${name}`);
}
module.exports = sayHello;


//In the above step we have created a module that is in the file module.js and this module contains a function whose parameter is a name . The main functionaity of this module is to greet someone when when it is called and give a name . Once the function is created we have used the module.export = sayHello to access it in other files .


//We have used this module in the using__module.js file