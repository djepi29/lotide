// function compares the end results to the expected results

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const toLog = 'lighthouselabs'

const countLetters = (strings) => {
  let strCount = {};
  for (let str of strings) {
    if (strCount[str]) {
      strCount[str] += 1;
    } else {
      strCount[str] = 1;
    }
  }
  return strCount;
};
console.log(countLetters(toLog));
