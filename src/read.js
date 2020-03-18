const fs = require('fs');

fs.readFile('./src/demo.txt',(error,data) => {
    if(error) console.log(error)

    console.log(data.toString());
    console.log('file read process has done.')
});

//const demoFile = fs.readFileSync('demo.txt');
//console.log(demoFile.toString());
//console.log('file read has done');