// imported functions
const assertObjectsEqual = require("../assertObjectsEqual");


//test cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);
console.log("---------------------------");