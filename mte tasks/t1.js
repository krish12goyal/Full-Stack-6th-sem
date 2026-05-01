const http = require('http');
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname,"log.txt");

const server = http.createServer((req,res)=> {

    const route = req.url;
    const method = req.method;
    const time = new Date().toString();

    const log = `${time} | ${method} | ${route}\n`;

    fs.appendFile(logFile,log,(err) => {
        if(err) console.log(err);
    })

    if(route === "/"){
        res.end("HOME PAGE");
    }
    else if(route === "/about"){
        res.end("ABOUT PAGE");
    }
    else if(route === "/contact"){
        res.end("CONTACT PAGE");
    }
    else{
        res.statusCode = 404;
        res.end("Page Not Found");
    }

});

server.listen(3000);