const http = require('http')
const fs = require('fs')
const url = require('url')

const myServer = http.createServer((req,res)=>{
    
    if(req.url=='/favicon.ico') return res.end;
    const myUrl = url.parse(req.url,true);
    console.log(myUrl)
    if(myUrl.pathname=='/'){
        res.end('Hello from home page')
    }else if(myUrl.pathname=='/About'){
        // const username =
        res.end(`Hello ${ myUrl.query.myname}`)
    }else{
        res.end('Error 404 :- Page not found!!!')
    }
    const currentDate = new Date();

    const log = `${currentDate.getTime()}: ${req.method} ${req.url} New request received.\n`;
    fs.appendFile('log.txt',log,(err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      })
});

myServer.listen(8001,()=>{
    console.log('Server Started...')
})