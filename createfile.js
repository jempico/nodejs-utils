// TASK 2
const fs = require('fs');

let createfile = (input) => {
    fs.writeFile('./input.txt', input, function (err) {
        if (err) { console.log(`You have and error: ${err}`) }
        else {console.log('File created!') } ;
    })
};

module.exports = createfile;