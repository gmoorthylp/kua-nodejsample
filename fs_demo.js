const fs = require('fs');
const path = require('path');


//create folder
/*fs.mkdir(path.join(__dirname, 'test'), {}, err => {
    if (err) throw err;
    console.log('Folder created..');
});*/

//Create and write to a file
fs.writeFile(path.join(__dirname, 'test','kua.text'), 'Kareerudayavar Thunai..\n', err => {
    if (err) throw err;
    console.log('Written to a file..');
},
    fs.appendFile(path.join(__dirname, 'test', 'kua.text'), 'Kareerudayavar blessed to learn Node.JS', err => {
        if (err) throw err;
        console.log('Written to a file.. callback');
    })
);

// Read file
fs.readFile(path.join(__dirname, 'test', 'kua.text'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

//Append file
/*fs.appendFile(path.join(__dirname, 'test', 'kua.text'), '\nKareerudayavar blessed to learn Node.JS & Express ', err => {
    if (err) throw err;
    console.log('Written to a file..');
});*/

