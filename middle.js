
// function to return the middle element of an uneven (length value) array or the two middle numbers of an even array
const middle = function(array) {

  if (array.length < 3) {
    return [];
  }

  let mid = Math.floor(array.length / 2);

  if (array.length % 2 !== 0) {
    return [array[mid]];
  }

  if (array.length % 2 === 0) {
    return [array[mid - 1], array[mid]];

  }
};


module.exports = middle;
