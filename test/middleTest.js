//imported libraries & functions
const assert = require('chai').assert;
const middle = require("../middle");


//test cases
describe("#middle", () => {

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [] for [number, number]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});
