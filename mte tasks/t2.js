const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const fileName = path.join(__dirname,"notes.txt");

const server = http.createServer((req,res) => {
    const parsedUrl = url.parse(req.url,true);
    const route = parsedUrl.pathname;

    if(route === "/add"){
        const note = parsedUrl.query.note;

        if(!note){
            res.statusCode = 404;
            res.end("400 Bad request");
            return;
        }

        fs.appendFile(fileName,note+"\n",() => {
            res.end("Note added successfully");
        })
    }

    else if(route === "/notes"){
        fs.readFile(fileName,"utf8",(err,data)=>{
            if(!data) res.end("No Notes Found");
            else res.end(data);
        })
    }

    else if(route === "/clear"){
        fs.writeFile(fileName,"",()=>{
            res.end("All Notes Deleted");
        })
    }
    
    else{
        res.statusCode = 404;
        res.end("404 Route Not Found");
    }
})

server.listen(3000,()=>{
    console.log("Running on port 3000");
})