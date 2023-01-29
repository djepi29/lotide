
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

const flatten = function(nestedArray) {
  let newArray = []
  for (element of nestedArray) {
    if (Array.isArray(element)) {
      for (let subElement of element) {
        newArray.push(subElement)
      }
    }
    else {
      newArray.push(element)
    }
  }
  return newArray
  // return nestedArray.flat()
}


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);