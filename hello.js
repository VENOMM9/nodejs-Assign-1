// const { clear } = require('console');
const fs = require('fs')
const path = require('path')

// creating a folder
fs.mkdir('students', (err, data) => {
    if (err) {
        console.log(err)
        return;
    }
    
})

// creating a file
fs.writeFile('./students/user.js', '', (err, data) => {
    if (err) {
        console.log(err)
        return;
    }
})

// rename a file
fs.rename('./students', './Names', (err, data) => {
    if (err) {
        console.log(err)
        return;
    }
})

// adding name as content to the file
fs.writeFile('./Names/user.js', `"name: victor nkwuo"\n`, (err, data)=> {
    if (err) {
        console.log(err)
        return;
    }
})


// updating file
fs.appendFile('./Names/user.js',`"age: 28"\n"sex: male"\n"nationality: nigerian"\n"phone: 89263878809"`, (err, data) => {
    if (err) {
        console.log(err)
        return;
    }
})


// updating the name of file
fs.rename('./Names/user.js', './Names/victor_nkwuo.js',(err, data)=>{
    if(err) {
        console.log(err)
        return;
    }
})

// reading the file
fs.readFile('./Names/victor_nkwuo.js','utf8', (err, data) => {
    if (err) {
        console.log(err)
        return;
    }
   console.log(data);
})

// deleting a file inside the folder
fs.rm('./Names/victor_nkwuo.js', () => { })
 
// deleting the folder
fs.rmdir('./Names', ()=>{})