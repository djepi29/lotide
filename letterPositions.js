
//function to log as keys & value the letters of a string & their index
const letterPositions = (sentence) => {
  let strPosition = {};
  for (let i = 0; i < sentence.length; i++) {
    if (strPosition[sentence[i]]) {
      strPosition[sentence[i]].push(i);
    } else {
      strPosition[sentence[i]] = [i];
    }
  }

  return strPosition;
};

module.exports = letterPositions;