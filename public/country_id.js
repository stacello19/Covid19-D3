const fs = require('fs');

fs.readFile('./public/country_id.txt', (err, data) => {
    if(err) {
        console.error(err)
    }
    const stringFile = data.toString().split(/\t/).join(':').split(/\n/).join(',');

    fs.appendFile('./public/country_id1.txt', stringFile, (err) => {
        if(err) throw err;
    })
})


