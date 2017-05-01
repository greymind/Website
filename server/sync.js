var path = require("path");
var spawn = require("child_process").spawn;

var syncCommand = path.join(__dirname, "..", "sync.sh");

var LOCK = false;

sync = () => {
    if (LOCK)
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