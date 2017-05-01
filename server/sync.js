const path = require("path");
const spawn = require("child_process").spawn;
const crypto = require('crypto');

const syncCommand = path.join(__dirname, "..", "sync.sh");
const secret = process.env.G_GREYMIND_SECRET || "";

var LOCK = false;

doesSignatureMatch = (req) => {
    const headerSignatureKey = "X-Hub-Signature";
    const headerSignature = req.header(headerSignatureKey);
    const body = JSON.stringify(req.body);

    const algorithm = "sha1";
    const hmac = crypto.createHmac(algorithm, secret);

    hmac.update(body);
    const digest = `${algorithm}=${hmac.digest("hex")}`;

    console.log(`[${headerSignatureKey}] ${headerSignature}`);
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