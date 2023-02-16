//function to store in an array elements of another array until callback
const takeUntil = function(array1, callback) {
  let output = [];
  for (let element of array1) {
    if (callback(element)) {
      break;
    } else {
      output.push(element);
    }
  }
  return output;

};

module.exports = takeUntil;

