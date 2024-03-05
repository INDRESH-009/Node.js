//path module helps us when we are working with file paths and directories 
/*
It provides you with various methods with which you can:

Join path segments together
Tell if a path is absolute or not
Get the last portion/segment of a path
Get the file extension from a path, and much more!
*/


//Using path module 
/*
    1. first we import the path module using the require() method
    2. now the path module is imported , we have to now assign the path of a file to some varibale called myPath . In this case we have given the path of the same file that we are using.
    3.Now we are going to get information of the path stored in the myPath variable using the path module
    4. Now we can understand each method that we have used inside the pathMethods object 

            a. path.basename('path') - function accepts a path and returns the last part of that path. In our case, the last part of myPath is: 03.pathModule.js

            b. path.dirname(myPath): The dirname() function selects the last part of the path provided to it  and returns the path to it's parent's directory. 
            In our case, since the last part of myPath is 03.pathModule.js. The dirname() function returns the path to the parent directory of 03.pathModule.js (the folder inside which 03.pathModule.js file lies), i.e, /mnt/c/Desktop/NodeJSTut.
            It can be also thought as: the dirname() function simply excludes the last part of the path provided to it and returns the leftover path.

            c. path.extname(myPath): This function checks for any extension on the last part of the provided path and it returns the file extension (if it exists), otherwise it returns an empty string: ''. In our case, since the last part is 03.pathModule.js and a file extension exists, we get '.js' as the output

            d. path.isAbsolute(myPath): This tells whether the provided path is absolute or not. On Unix-based systems (such as macOS and Linux), an absolute path always starts with the forward slash (/). On Windows systems, an absolute path can start with a drive letter (such as C:) followed by a colon (:), or with two backslashes (\\). Since the value stored in myPath variable starts with /, therefore isAbsolute() returns true.

            e. path.parse(myPath) : This function accepts a path and returns an object that contains the detailed breakdown of the path provided as argument.The object it returns contains 
                1.root - the root of the path , in this case / 
                2.dir - the directory of the file , in this case
                  /Users/indreshmr/Developer/Node-js/module/types_of_modules
                3.base - the base file name , in this case 03.pathModule.js
                4.ext - the extension of the file , in this case .js
                5.name - the name of the file without extension , in this case 03.pathModule
                
*/

//importing path module 

const path  = require("path");

//Assigning a path to myPath variable
const myPath = '/Users/indreshmr/Developer/Node-js/module/types_of_modules/03.pathModule.js';

//creating an object that has the methods from the path module 
const pathMethods = {
    filename : path.basename(myPath),
    foldername : path.dirname(myPath),
    fileExtension : path.extname(myPath),
    absoluteOrNot : path.isAbsolute(myPath),       
    isItAbsolute : path.isAbsolute('Node-js/module/types_of_modules/03.pathModule.js'), //not a absolute path
    detailInfo : path.parse(myPath) 
}

//logging the object
console.log(pathMethods);


//PATH SEPERATOR AND PATH STRUCTURE
/*
We must have noticed that the path for the same file is different in different operating system 

In windows OS a typical file path is like  :  C:\Users\username\Desktop\Documents\example.txt
In unix based OS th file path is like      :  /Users/username/Desktop/Documents/example.txt

OBSERVATION
    1. They have different path seperators between directories 
        In windows - \ backslash is used 
        In Unix    - / forwardslash is used 
    2. Difference in root directories of user's file 
        In windows  - root directory is represented as  -   C:\Users\username
        In Unix     - root directory is represented as  -   /Users/username/


Keeping this in mind lets move to other functions given by path module 
    1.path.sep  -  
        sep is a variable which contains the system specific path separator. For Windows machine: console.log(path.sep) prints \ in the console while in case of macOS or Linux, path.sep returns a forward slash ( / ).
    2.path.join(<paths>) - 
        The path.join() function accepts path(s) as strings. It then joins those paths using the system specific path separator and returns the joined path. For example, consider this code:

            console.log(path.join('grandParentFolder', 'parentFolder', 'child.txt'))

*/
console.log(path.join('grandParentFolder', 'parentFolder', 'child.txt'))
// The above code prints different results for different Operating Systems.
// In Windows, it will give this output: grandParentFolder\parentFolder\child.txt 
//while in macOS/Linux, it will give this output: grandParentFolder/parentFolder/child.txt.


/*
    path.resolve(<paths>): 
        This function works in a similar way as compared to path.join(). The path.resolve() function just joins the different paths provided to it using the system specific path separator and then appends the final output to the absolute path of the present working directory.

        Suppose you are a Mac user and the absolute path to your present working directory is this: 
        /Users/indreshmr, and the current directory is Developer/Node-js/ 
         If you run this code:
*/
console.log(path.resolve('grandParentFolder', 'parentFolder', 'child.txt'));

//The absolute path and the path of the current directory appends with the given path as strings and provides the absolute path for the file as 
// /Users/indreshmr/Developer/Node-js/grandParentFolder/parentFolder/child.txt
