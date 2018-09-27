var parser = require('flow-parser')

var fileReader = require('./utils/file-reader')

var code  = fileReader.readFlowSync();
console.log(code);
console.log(JSON.stringify(parser.parse(code, {})));
