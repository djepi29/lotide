// function to store in an object the letters of a string as keys and the number of time they occure as values
const countLetters = (str) => {
  let newStr = str.replaceAll(' ','');
  newStr.split('');
  let output = {};
  for (let letter of newStr) {
    if (output[letter]) {
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }
  }
  return output;
};

module.exports = countLetters;