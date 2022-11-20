// function that compares the values of two given arrays
//  if they are equal.
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

// function that compares two arrays
// using the logic of eqArrays implemented as a callback.
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2,)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
  }
};

const letterPositions = (sentence) => {
  let strPosition = {};
  for (let i = 0; i < sentence.length; i++) {
    if (strPosition[sentence[i]]) {
      strPosition[sentence[i]].push(i);
    } else {
      strPosition[sentence[i]] = [sentence.indexOf(sentence[i])];
    }
  }

  return strPosition;
};
console.log(letterPositions('hello'));
assertArraysEqual(letterPositions("hello").e, [1]);