// TASK 1

let repeat = (msg) => {
    let count = 11;
    let loop = setInterval(function() {
        console.log(`This function will print your message 10 times, one for each second` );
        count--;
        console.log(`${count}: ${msg}` );
        if (count == 1) {
            console.log(`End of the loop. Bye!!`)
            clearInterval(loop);
        }
    }, 1000);
};


module.exports = repeat;