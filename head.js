// function to take in an array and return the first element of the list.
const head = function(array) {
  if (array.length >= 1) {
    return array[0];
  } if (array.length === 0) {
    return undefined;
  }
};

module.exports = head;