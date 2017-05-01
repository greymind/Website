var http = require('http');
var path = require("path");
var exec = require('child_process').exec;

var host = "127.0.0.1";
var port = 3789;

var syncCommand = path.join(__dirname, "..", "sync.sh");

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port, host);

console.log(`Server running at ${host}:${port}`);
console.log(__dirname);

exec(syncCommand, function (error, stdout, stderr) {
    console.log(stdout);
});