var express = require("express");
var bodyParser = require("body-parser");

var sync = require("./sync.js").sync;

var host = "127.0.0.1";
var port = process.env.PORT || 3789;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

router.use(function (req, res, next) {
    log(req.originalUrl, "Original URL");
    log(req.url, "URL");
    log(req.hostname, "Hostname");
    log(req.ip, "IP");
    log(req.method, "Method");
    log(req.headers, "Headers");
    log(req.body, "Body");
    log(req.query, "Query string");
    console.log();

    next();

    function log(thing, label) {
        if (label)
            console.log(`[${label}] ${JSON.stringify(thing)}`);
        else
            console.log(`${JSON.stringify(thing)}`);
    }
});

router.get("/", (req, res) => {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.post("/deploy", (req, res) => {
    res.json({ message: 'posting!' });
    //sync();
});

app.use("/", router);

app.listen(port, host);

console.log(`Server running at ${host}:${port}`);

