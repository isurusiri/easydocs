var fs = require('fs');
var rl = require('readline-specific');

var fileReader = {
    readFlowSync: () => {
        // path should be taken as an argument
        return fs.readFileSync('./static/index.js', 'utf8');
    },
    readFlowSyncByLine: (lineNo) => {
        // path should be taken as an argument
        rl.oneline('./static/index.js', lineNo, function(err, res) {
            if (err) {
                console.error(err);
            }
            return res;
        });
    },
    readFlowSyncByLines: (lineNo) => {
        // path should be taken as an argument
        rl.multilines('./static/index.js', lineNo, function(err, res) {
            if (err) {
                console.error(err);
            }
            return res;
        });
    }
};

module.exports = fileReader;
