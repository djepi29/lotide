// impoerted functions
const assert = require("chai").assert;
const tail = require("../tail");
//const assertEqual = require("../assertEqual")

// test cases
describe("#tail", () => {

  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });

  it("returns [] for [number]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns ['Lighthouse', Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

});

