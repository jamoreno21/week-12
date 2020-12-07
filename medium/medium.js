const fs = require('fs')

planets = fs.readFile('planets.txt', 'utf8', (err, data)=> {

    //if(error) throw err;
    console.log(data)
})
