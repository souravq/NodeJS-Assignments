//require('dotenv').config();
function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    //var arguments = process.argv
    //const firstName = process.argv[2];
    return process.argv[2];
}

function getNameFromEnv() {
    // Write your code here
    return process.env.USERNAME;
}

function getNameFromReadLine() {
    // Write your code here
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Please enter your name", (ans) =>{
        console.log(ans);
        //return ans;
        rl.close();
    })
}
console.log(getNameFromCommandLine());
console.log(getNameFromEnv());
getNameFromReadLine();

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}