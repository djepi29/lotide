
const tail = function(array) {
  let newArray = array.slice(1);
  if (array.length <= 1) {
    return [];
  } else {
    return newArray;
  }
};

module.exports = tail;