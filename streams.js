const fs = require('fs')

let readStream = fs.createReadStream('./docs/test2.txt',{encoding: 'UTF8'})
let writeStream = fs.createWriteStream('./docs/test4.txt')

// readStream.on('data', (chunk) => {
//     console.log(chunk);
//     writeStream.write(chunk)
// })

readStream.pipe(writeStream)