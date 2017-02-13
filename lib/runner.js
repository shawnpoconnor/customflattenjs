require('./flattenArray.js');

var input1 = [[[[1, null], null, [3]]]];
var input2 = [];
var input3 = [0, 2, [[2, 3], 8, 100, null, [[null]]], -2];

console.log(input1.flatten());
console.log(input2.flatten());
console.log(input3.flatten());