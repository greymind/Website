var http = require('http');
var path = require("path");
var spawn = require('child_process').spawn;

var host = "127.0.0.1";
var port = 3789;

var syncCommand = path.join(__dirname, "..", "sync.sh");

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port, host);

console.log(`Server running at ${host}:${port}`);
console.log(__dirname);

var syncProcess = spawn(syncCommand);

syncProcess.stdout.on('data', (data) => { console.log(data); });

syncProcess.stdout.on('end', (data) => {
    console.log("Sync complete!");
});

syncProcess.on('exit', (code) => {
    if (code != 0) {
        console.error(`Failed: ${code}`);
    }
});