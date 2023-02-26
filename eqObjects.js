const eqArrays = require("./eqArrays");
//function to compare two objects
const eqObjects = (object1, object2) => {
  let x = Object.keys(object1);
  let y = Object.keys(object2);
  if (x.length !== y.length) {
    return false;
  }
  for (let key of x) {
    if (object1[key] !== object2[key]) {
      return false;
    }
    if (typeof object1[key] !== typeof object2[key]) {
      return false;
    } else if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    }
  }
  return true;
};

module.exports = eqObjects;