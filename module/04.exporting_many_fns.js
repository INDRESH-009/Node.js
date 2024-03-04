//In case we want to export many functions , variable or other codeblocks , then we have realised that we cant do multiple module.exports call because it overwrites the previous commands . So we cant export all the codeblocks . Thus The solution to that problem is we have to group all the elements from a file we need to export as a module by creating an object 

function driving_eligiblity(age){
    age>=18?console.log("Eligible to drive"):console.log("Not eligible to drive");
}
let myName = "Indresh";
let aboutMe = {
    name:myName,
    age:19,
    occupation:"Tech Entreprenuer",
    netWorth:"Billionaire"
}
module.exports = {
    driving : driving_eligiblity,
    myName : myName,
    myInfo : aboutMe
}

//To summarize, you can use module.exports as many times as you want in your NodeJS code, but you should be aware that each new assignment will replace the previous one. You should use an object to group multiple exports together.
