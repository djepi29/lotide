//imported function
const eqArrays = require("./eqArrays");


//function to assert two arrays based off eqArrays.js return (boolean)
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2,)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
  }
};


module.exports = assertArraysEqual;