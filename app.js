// import inbuilt modules
const path = require("path")
const process = require('process')
const os = require('os')



// print current working directory
const cwd = path.resolve();
console.log(cwd);



// print seperator of file path
const seperator = path.sep
console.log(seperator);


// print extension name
const extName = path.extname('C:\Users\chris\Desktop\assignment 2nd semester 1\ 1st question\package.json');
console.log(extName);


// print process id
const processInfo = process.pid
console.log(processInfo);


// print process version
const nodeVersion = process.versions;
console.log(nodeVersion);


// print user information
const userInfo = os.userInfo()
console.log(userInfo);


// print OS platform
const platform = os.platform()
console.log(platform);