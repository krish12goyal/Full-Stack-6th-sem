const http = require("http");
const os = require("os");

const server = http.createServer((req, res) => {
    const requestUrl = req.url;
    const requestMethod = req.method;
    
    fs.writeFile("log.txt",requestUrl);

    if (requestUrl === "/home") {
        res.end("Welcome to the Home Page!");
        return;
    }
    if(requestUrl === "/logs") {
        fs.readFile("log.txt", "utf-8", (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end("Error reading log file");
                return;
            }
            res.setHeader('Content-Type', 'text/plain');
            res.end(data);
        });
        return;
    }
    if (requestUrl === "/users") {
        res.end("List of Users");
        return;
    }
    if (requestUrl === "/systemConfig") {
        const totalMem = os.totalmem();
        const freeMem = os.freemem();
        const usedMem = totalMem - freeMem;
        const platform = os.platform();
        const arch = os.arch();
        const cpus = os.cpus().length;

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            totalMemory: `${(totalMem / 1024 / 1024 / 1024).toFixed(2)} GB`,
            freeMemory: `${(freeMem / 1024 / 1024 / 1024).toFixed(2)} GB`,
            usedMemory: `${(usedMem / 1024 / 1024 / 1024).toFixed(2)} GB`,
            platform: platform,
            architecture: arch,
            cpuCores: cpus
        }));
        return;
    }
    res.end("Hello, World!");
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});