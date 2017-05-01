const path = require("path");
const spawn = require("child_process").spawn;
const crypto = require('crypto');

const syncCommand = path.join(__dirname, "..", "sync.sh");
const secret = process.env.G_GREYMIND_SECRET || "";

var LOCK = false;

doesSignatureMatch = (req) => {
    const headerSignature = req.header("X-Hub-Signature");
    const body = JSON.stringify(req.body);

    const hmac = crypto.createHmac("sha1", secret);

    hmac.update(JSON.stringify(body));
    const digest = hmac.digest("hex");

    console.log(`[Digest] ${digest}`);

    return headerSignature === digest;
}

sync = (req) => {
    if (LOCK || !doesSignatureMatch(req)) {
        console.warn("Deploy in progress or security error!");
        return;
    }

    console.log("Deploying...");

    return;

    LOCK = true;

    var syncProcess = spawn(syncCommand);

    syncProcess.stdout.on("data", (data) => { console.log(data.toString()); });

    syncProcess.stdout.on("end", (data) => {
        console.log("Sync complete!");
    });

    syncProcess.on("exit", (code) => {
        if (code != 0) {
            console.error(`Failed: ${code}`);
        }

        LOCK = false;
    });
}

exports.sync = sync;