// function to find the key of an object specified by callback
const findKey = (object, cb) => {
  
  for (const k in object) {
    if (cb(object[k])) {
      return k;
    }
  }
  return undefined;
};

module.exports = findKey;