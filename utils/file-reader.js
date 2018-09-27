var fs = require('fs')

var fileReader = {
    readFlowSync: () => {
        // path should be taken as an argument
        return fs.readFileSync('./static/index.js', 'utf8');
    }
};

module.exports = fileReader;
