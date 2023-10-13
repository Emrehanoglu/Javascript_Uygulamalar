//CommonJS Module Syntax
const logger = require('./logger')

logger.log('nodeJs')
console.log(logger.name)

//Undescore

const _ = require('underscore')

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 70}, {name: 'curly', age: 60}];
console.log(_.max(stooges, function(stooge){ return stooge.age; }));

