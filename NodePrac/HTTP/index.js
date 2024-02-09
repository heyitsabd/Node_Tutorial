const http = require('http');
const fs = require('fs')

const myServer = http.createServer((req,res)=>{
    
    if(req.url=='/favicon.ico') return res.end

    const log = `${Date.now()}: ${req.url} New request receive\n`
    if(req.url=='/'){
        res.end('Hello from server' )
    }else if(req.url=='/Home'){
        res.end('Hello to home page')
    }else {
        res.end('Error 404 page not found!!!!')
    }
    
    fs.appendFile('log.txt',log ,(err,res)=>{})
    // console.log(req.headers)
    // console.log('New request receive')
});

myServer.listen(8000,()=> {
    console.log('Server started')
});



