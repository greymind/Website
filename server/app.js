const express = require("express");
const bodyParser = require("body-parser");

const sync = require("./sync.js").sync;

const host = "127.0.0.1";
const port = process.env.PORT || 3789;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

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
    res.json({ message: "What're you doing here?" });
});

router.post("/deploy", (req, res) => {
    sync(req);
    res.status(200);
    res.end();
});

app.use("/api", router);

app.listen(port, host);

console.log(`Server running at ${host}:${port}`);