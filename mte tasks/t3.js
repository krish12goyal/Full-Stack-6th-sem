const http = require("http")
const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname,"visits.txt");

const server = http.createServer((req,res) => {
    const route = req.url;

    if(route === "/visit"){
        fs.readFile(filePath,"utf8",(err,data) => {
            let count = 0;

            if(!err && data){
                count = parseInt(data);
            }
            count++;

            fs.writeFile(filePath,count.toString(),()=>{
                res.end(`Visit Count : ${count}`);
            })
        })
    }
    else if(route === "/count"){
        fs.readFile(filePath,"utf8",(err,data) => {
            if(err || !data){
                res.end("No Visits Recorded");
            }else{
                res.end(`Total Visits: ${data}`);
            }
        })
    }
    else if(route === "/reset"){
        fs.writeFile(filePath,"0",()=> {
            res.end("Visit Reset");
        })
    }
    else{
        res.statusCode=404;
        res.end("404 Route Not Found");
    }
})

server.listen(3000,()=>{
    console.log("Server Running -> 3000 Port");
})