const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (object, value) => {
  let winningKey = '';
  let keyArray = Object.keys(object);
  for (let elm of keyArray) {
    if (object[elm] !== value) {
      winningKey = undefined;
    } else {
      winningKey = elm;
    }
  }
  return winningKey;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


//      if (Object.values(object) !== value) {
//   return undefined;
// }
// else {
//   return elm;