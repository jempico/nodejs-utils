// TASK 3
const fs = require('fs');

let readDataCallback = (err, data) => {
    if (err) {
        console.log(`You have and error: ${err}`);
    } else {
        console.log(`Reading operation succeed. Your file contains: ${data}`);
    }
}

let readfile = (file) => {
        fs.readFile(file, 'utf-8', readDataCallback);
};

module.exports = readfile;