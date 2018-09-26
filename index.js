var parser = require('flow-parser')

console.log(JSON.stringify(parser.parse('/*this is a comment*/1+2', {})));
