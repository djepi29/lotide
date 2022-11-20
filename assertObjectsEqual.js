const eqObjects = (object1, object2) => {
  let x = Object.keys(object1);
  let y = Object.keys(object2);
  if (x.length !== y.length) {
    return false;
  }
  for (let key of x) {
    if (typeof object1[key] !== typeof object2[key]) {
      return false;
    } else if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);
const abc = { a: "1", b: "2", c: "3" }
assertObjectsEqual(ab, abc);
console.log("---------------------------")
