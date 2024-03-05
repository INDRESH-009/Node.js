/*
CONCEPTS LEARNED 
    1.what is fs module
    2.creating a directory using the fs.mkdir() method
    3.creating and writing to a file asyncronously using the fs.writeFile() method
    4.Solving the problem of data deletion during writing by using the options object -{flag:'a'} as 3rd parameter
    5.reading a file asyncronously using the fs.readfile()
    6.What is encoding and why its used
    7.Reading and writing to a file syncronously - using fs.writeFileSync , fs.readFileSync , and try-catch.
    8.Reading the contents of a directory using fs.readdir()
    9.How to rename a file using fs.rename()
    10.How to delete a file using fs.unlink() function


*/

/*
The fs module helps with file operation functions like 
    1.reading a file (sync or async way)
    2.writing to a file(sync or asyncronously)
    3.Deleting a file
    4.Reading the contents of a directory 
    5.Renaming a file 
    6.Watching for changes in a file



    LET US CREATE A DIRECTORY USING fs.mkdir()
    
    The fs.mkdir() function in Node.js is used to create a new directory. It takes two arguments: the path of the directory to be created and an optional callback function that gets executed when the operation is complete.

    path: Here, path refers to the location where you want to create a new folder. This can be an absolute or a relative path. In my case, the path to the present working directory (the folder I am currently in), is: /User/indreshmr/Developer/NODE-JS/types_of_modulesbv. So, Let's create a folder in the NodeJSTut directory called myFolder.


    callback function: The purpose of the callback function is to notify that the directory creation process has completed. This is necessary because the fs.mkdir() function is asynchronous, meaning that it does not block the execution of the rest of the code while the operation is in progress. Instead, it immediately returns control to the callback function, allowing it to continue executing other tasks. Once the directory has been created, the callback function is called with an error object (if any) and any other relevant data related to the operation. In the below code, we are just using it to display a success message in the console or any error.
*/

const fs  = require('fs');
fs.mkdir('/Users/indreshmr/Desktop/sample',(err)=>{
    if(err){
        console.log("There is a error");
    }
    else{
        console.log("The file is successfully created");
    }
})


fs.mkdir('./fsSampple.js',function(err){    //cant create a js file , only folders
    if(err){
        console.log("Error");
    }
    else{
        console.log("Successful");
    }
})


fs.mkdir('./mostsimplifiedVersion',err=>(err?console.log("error"):console.log("Created successfully")));


//HOW TO CREATE AND WRITE TO A FILE ASYNCRONOUSLY - fs.writeFile()
/*
Once we have created a folder/directory using the fs.mkdir command , now we are going to create a file and write to it  using the fs module
We can write to file usng 2 ways 
    1.Syncronously 
    2.Asyncronously

    Synchronous Approach: 
        In this approach, we create a file and write the data to it in a blocking manner, which means that NodeJS waits for the creation and write operation to complete before moving on to the next line of code. If an error occurs during this process, it throws an exception that must be caught using try...catch.


    Asynchronous Approach: 
        In this approach, we create and write data to a file in a non-blocking manner, which means that NodeJS does not wait for the write operation to complete before moving on to the next line of code. Instead, it takes a callback function that gets called once the entire process is completed. If an error occurs during the write operation, the error object is passed to the callback function.



        NOW WE WILL BE FOCUSSING ON - fs.writeFile() which uses -  THE ASYNC APPROACH

        writeFile() is a method provided by the fs (file system) module in Node.js. It is used to write data to a file asynchronously. The method takes three arguments:

                1. The path of the file to write to (including the file name and extension)
                2. The data to write to the file (as a string or buffer)
                3. An optional callback function that is called once the write operation is complete or an error occurs during the write operation.


        When writeFile() is called, Node.js creates a new file or overwrites an existing file at the specified path. It then writes the provided data to the file and closes it. Since the method is asynchronous, the write operation does not block the event loop, allowing other operations to be performed in the meantime.




Below is the code where we create a new file called myFile.txt in the mostsimplifiedVersion directory and write this data to it: Hi,this is newFile.txt.

*/
const data = "  Hi,this is newFile.txt.";
fs.writeFile('./mostsimplifiedVersion/myFile.txt',data,function(err){
    if(err){
        console.log("Error occured");
    }
    else{
        console.log("Successfull");
    }
})

//Since newFile.txt didn't exist previously, Hence the writeFile() function created this file for us on the provided path and then wrote the value in the data variable to the file. Suppose this file already existed. In that case, writeFile() will just open the file, erase all the existing text present in it and then write the data to it.


//Now we have created a file myFile.txt in the mostsimplifiedVersion directory and the data has been written


/*
PROBLEM WITH THE ABOVE CODE 
    The problem with this code is: when you run the same code multiple times, it erases the previous data that is already present in newFile.txt and writes the data to it.

SOLUTION
    In case you do not want the original data to get deleted and just want the new data to be added/appended at the end of the file, you need to make a little change in the above code by adding this "options object": {flag: 'a'} as the third parameter to writeFile()
*/

const update = "   I am updating this using the flag:a object";
fs.writeFile('./mostsimplifiedVersion/myFile.txt',update,{flag:'a'},
function(err){
    err?console.log("Error"):console.log("Update written");
})

// Once you run the above code again and again, you will see that the myFile.txt has the value of the data variable written to it multiple times. This is because the object (3rd parameter): {flag: 'a'} indicates the writeFile() method to append the data at the end of the file instead of erasing the previous data present in it.

/*
READING A FILE ASYNCRONOUSLY USING THE fs.readfile() function

The readFile() function takes 3 parameters:

        The path to the file which is to be read.
        The encoding of the file.
        The callback function that gets executed once the reading operation is completed or if any error occurs during the reading operation. It accepts 2 parameters: first parameter stores the file data (if read operation is successful) and the second parameter stores the error object (if read operation fails due to some error).

The readFile() function is very intuitive and once called, it reads the data present in the provided file according to the given encoding. If the read operation is successful, it returns the data to the callback function and if not, it will return the error occurred.
*/

//READING THE CONTENTS FROM THE myFile.txt
fs.readFile('./mostsimplifiedVersion/myFile.txt',{encoding:'utf-8'},function(err,data){
    data?console.log(data):console.log(err);
})



/*
        It is to be noted here that the encoding property is set to 'utf-8'. At this point, some of you may not know about the encoding property, So Let's understand it in a bit more detail:

        The encoding parameter in the fs.readFile() method of Node.js is used to specify the character encoding used to interpret the file data. By default, if no encoding parameter is provided, the method returns a raw buffer.

        If the readFile() method is called without providing an encoding parameter, you will see a result similar to this printed in the console:

        <Buffer 20 20 48 69 2c 74 68 69 73 20 69 73 20 6e 65 77 46 69 6c 65 2e 74 78 74 2e 6e 67 20 74 68 65 20 66 6c 61 67 3a 61 20 6f 62 6a 65 63 74>

*/
fs.readFile('./mostsimplifiedVersion/myFile.txt',function(err,data){
    data?console.log(data):console.log(err);
})

/*

This raw buffer is difficult to read and interpret as it represents the contents of the file in binary form. To convert the buffer to a readable string, you can specify an encoding parameter when calling readFile().

In our case, we specified the 'utf8' encoding as the second parameter of the readFile() method. This tells Node.js to interpret the file contents as a string using the UTF-8 character encoding, thus you see the original data printed in the console. Other common encodings that can be used with readFile() include:

            1. 'ascii': Interpret the file contents as ASCII-encoded text.
            2. 'utf16le': Interpret the file contents as 16-bit Unicode text in little-endian byte order.
            3. 'latin1': Interpret the file contents as ISO-8859-1 (also known as Latin-1) encoded text.


*/





/*
    Reading and Writing to a File Synchronously
    Up until now, you have learned how to write to and read the data from a file asynchronously. But there are synchronous alternatives to the 2 functions we learnt above, namely: readFileSync() and writeFileSync().

    Note that since these are synchronous operations, they need to be wrapped in a try...catch block. In case the operations fail for some reason, the errors thrown will be caught by the catch block.



        Now we are creating a program where we are creating a file called fileSync.txt int the mostsimplifedVersion directory and writing to it .Then we are reading from this file . Both the read and write is syncronously 

        WE CANT WRITE THE CODE THIS WAY SINCE IT IS ASYNC CODE WE NEED TO SPECIFY THE - try-catch method only
        const dataForSyncFile = 'This is the data to be written in the file using sync method';
        fs.writeFileSync('./mostsimplifiedVersion/fileSync.txt',dataForSyncFile,(err)=>{
            if(err){
                console.log("Error in writing sync file");
            }
            else{
                console.log("Sync file written successfully");
            }
        })
*/

        //WRITING TO A FILE USING FS MODULE SYNCRONOUSLY
        try{
            fs.writeFileSync('./mostsimplifiedVersion/fileSync2.txt','My own try of sync file write');
            console.log("SyncFile 2 written");
        }
        catch(err){
            console.log("Error")
            console.log(err);
        }


        //READING A FILE USING FS MODULE SYNCRONOUSLY
        try{
            const fileData = fs.readFileSync('./mostsimplifiedVersion/fileSync2.txt','utf-8');
            console.log("Read operation successfull . THe file data is " + fileData);
            
        }
        catch(err){
            console.log(err)
        }



        //CREATING , READING AND WRITING A FILE SYNCRONOUSLY
        try{
            // Write to file synchronously
            fs.writeFileSync('./mostsimplifiedVersion/fileSync.txt', 'myFileSync says Hi');
            console.log('Write operation successful');
            
            // Read file synchronously
            const fileData = fs.readFileSync('./mostsimplifiedVersion/fileSync.txt', 'utf-8');
            console.log('Read operation successful. Here is the data:');
            console.log(fileData);
            
        } catch(err){
            console.log('Error occurred!');
            console.log(err);
        }


        //READING THE CONTENTS OF A DIRECTORY USING - fs.readdir()
        //This command helps us to read the coontents of a particular directory . So here if we consider our mostsimplifiedVersion directory then we can clearly see that the contents of this directory are 3 files - [fileSync.txt,fileSync2.txt,myFile.txt]. So usinf this command we can get the contents 


        /*
        The readdir() function accepts 2 parameters:

            The path of the folder whose contents are to be read.

            Callback function which gets executed once the operation is completed or if any error occurs during the operation. This function accepts 2 parameters: The first one which accepts the error object (if any error occurs) and the second parameter which accepts an array of the various files and folders present in the directory whose path has been provided.
 */

       //CODE TO READ THE mostsimplifiedVersion DIRECTORY AND PRINT THE RESULTS IN THE OUTPUT 
       fs.readdir('./mostsimplifiedVersion',function(err,files){
        err?console.log("Error in displying files"):console.log(files);
       })



       //RENAMING A FILE USING THE fs.rename() method
       
/*
       The fs.rename() method in Node.js is used to rename a file or directory. The method takes two arguments, the current file path and the new file path, and a callback function that is executed when the renaming is complete.
       Syntax - fs.rename('old path','new path',callback);

                        oldPath (string) - The current file path
                        newPath (string) - The new file path
                        callback (function) - A callback function to be executed when the renaming is complete. This function takes an error object as its only parameter.
*/

//Let us rename this file . the current name is "04.fsmodule.js" to "04.fs-module.js".
       fs.rename('./module/types_of_modules/04.fsmodule.js','./module/types_of_modules/04.fs-module.js',function(err){
        err?console.log("err"):console.log("name changed");
       })

//Note that you should only provide valid paths (absolute or relative) to the rename() function and not just the names of the files. Remember it's oldPath and newPath and NOT oldName and newName.

    //For example, consider this code: 
    //fs.rename('./mostsimplifiedVersion/myFile.txt', 'newFileAsync.txt', ...rest of the code).

//In this case, since we did not provide a proper path in the 2nd parameter, rename() assumes that the path to the newly named file should be: ./newFileAsync.txt. Thus, it basically removes the myFile.txt from the mostsimplifiedVersion directory, renames the file to newFileAsync.txt and moves it to the current working directory.




/*
DELETING A FILE USING fs.unlink()

    fs.unlink() function which is used to delete a file. It takes in 2 parameters:

        The path of the file which you want to delete, and
        
        The callback function which gets executed once the delete operation is over or if any error occurs during the operation.

The following code deletes the unlink.js file in mostsimplifiedVersion directory
*/
fs.unlink('./mostsimplifiedVersion/unlink.js',(err)=>{
    err?console.log("err in deleting"):console.log("deleted successfully")
})