// function that filters out an array based off elements of another array.
const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let elm of source) {
    if (!itemsToRemove.includes(elm)) {
      newArray.push(elm);
    }
  }
  return newArray;
};

module.exports = without;