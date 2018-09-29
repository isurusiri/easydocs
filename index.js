var parser = require('flow-parser')

var fileReader = require('./utils/file-reader')

var rx = require('rxjs');
var rxOperators = require('rxjs/operators');

var code  = fileReader.readFlowSync();

// strategy is to extract comments first along with their line numbers
// then see if it has a method declaration next to it.
var soruce = rx.from(parser.parse(code, {}).comments);
var comments = soruce.pipe(rxOperators.map(comment => {
    return {text: comment.value, line: comment.loc.start.line, methodSignature: ''}
}));

const subscription = comments.subscribe(val => console.log(val));

