
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

module.exports = findKeyByValue;