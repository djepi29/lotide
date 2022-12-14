
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
 
const results1 = map(words, word => word[0])
const results2 = map(words, word => word.length)
const results3 = map(words, word => words.indexOf(word))

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2,)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
  }
};

assertArraysEqual(results1, [`g`,`c`,`t`,`m`,`t`])
assertArraysEqual(results2, [6,7,2,5,3])
assertArraysEqual(results3, [0,1,2,3,4])