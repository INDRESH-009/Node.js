//What is nodejs
/*
Node is a way we can run javascript outside the browser. The nodejs is a javascript runtime that uses the googles V8 engine . Since it is javascript runtime outside the browser we cant get the functionalities like DOM , window object ,local storage and WebAPI like geolocation etc. We also cant write document.queryselector() or alert() beacuse they can only be used when js is in the browser. 

nodejs was created and it was taking JS out of the browser and make it able to be mainstream language to interact with the system resources like Files, IO and Network operations.

Node is meant for server-side programming, while those browser features are meant for client-side programming.
*/





//Global variables in nodejs
/*
The variabels that store some data and can be accessed from anywhere in the code , no matter how deeply it is nested is called global variable

Commonly used global variable - 
    1.__dirname
    2.__filename



    __dirname is a global variabe that stores the path of the current working directory 
    __filename is a global varibale that stores the payth of the current wrking file 

We can also create our own global variable as the below syntax
    1.Define a global variable - [global.variable_name = 'value';]
    2.Access the global varibale - [console.log(variable_name);]


*/

//__dirname global variable 
console.log(__dirname);

//__filename global variable 
console.log(__filename);

//Creating our own global variable
global.my__name = "Indresh";
console.log(my__name);

