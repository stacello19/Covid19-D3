const fs = require('fs');

fs.readFile('./data.txt', (err,data) => {
    const handsome_gp = data.toString()

    const data1 = handsome_gp.split(/[ \n]+/);

    console.log(data1)
})