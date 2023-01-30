// function compares the end results to the expected results

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const toLog = 'lighthouselabs'

const countLetters = (str) => {
  let newStr = str.replaceAll(' ','');
  newStr.split('');
  let output = {};
  for (let letter of newStr) {
    if (output[letter]) {
      output[letter] += 1
    }
    else {
      output[letter] = 1
    }
  }
  return output

  // let strCount = {};
  // for (let str of strings) {
  //   if (strCount[str]) {
  //     strCount[str] += 1;
  //   } else {
  //     strCount[str] = 1;
  //   }
  // }
  // return strCount;
};
assertEqual(countLetters(toLog)["s"], 2 );
