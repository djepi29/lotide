//functions imported
const assertArraysEqual = require("../assertArraysEqual");
const map = require('../map');




// test cases
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => words.indexOf(word));

assertArraysEqual(results1, [`g`,`c`,`t`,`m`,`t`]);
assertArraysEqual(results2, [6,7,2,5,3]);
assertArraysEqual(results3, [0,1,2,3,4]);