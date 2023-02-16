
// funtion to remove all internal array brackets and print out single array
const flatten = function(nestedArray) {
  let newArray = [];
  for (let element of nestedArray) {
    if (Array.isArray(element)) {
      for (let subElement of element) {
        newArray.push(subElement);
      }
    } else {
      newArray.push(element);
    }
  }
  return newArray;
  // return nestedArray.flat()
};


module.exports = flatten;