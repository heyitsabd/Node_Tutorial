const fs = require('fs');

// fs.writeFileSync('./test.txt','Hey its new text file')

const result = fs.readFileSync('./contact.txt','utf-8')
console.log(result)