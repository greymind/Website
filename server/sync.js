const path = require("path");
const spawn = require("child_process").spawn;
const exec = require("child_process").exec;
const crypto = require('crypto');

const syncCommand = path.join(__dirname, "..", "sync.sh");
const supervisorCommand = "sudo supervisorctl restart greymind.com.api";
const secret = process.env.G_GREYMIND_SECRET || "";

var LOCK = false;

getHmacDigest = (body) => {
    const algorithm = "sha1";
    const hmac = crypto.createHmac(algorithm, secret);

    hmac.update(body);
    const digest = `${algorithm}=${hmac.digest("hex")}`;

    return digest;
}

doesSignatureMatch = (req) => {
    const headerSignatureKey = "X-Hub-Signature";
    const headerSignature = req.header(headerSignatureKey);

    const body = JSON.stringify(req.body);
    const digest = getHmacDigest(body);

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

        console.log("Restarting server...");
        exec(supervisorCommand, (err, stdout, stderr) => console.log(stdout));
    });
}

exports.sync = sync;