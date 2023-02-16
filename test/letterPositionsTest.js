//imported functions functions
const assertArraysEqual = require("../assertArraysEqual");
const letterPositions = require("../letterPositions");


//test cases
console.log(letterPositions('hello'));
assertArraysEqual(letterPositions("hello").e, [1]);