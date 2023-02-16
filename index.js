
// all utilities export ready

const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const findKey  = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const flatten = require("./flatten");
const head = require("./head");
const letterPositions = require("./letterPositions");
const map = require("./map");
const middle = require("./middle");
const tail = require("./tail");
const takeUntil = require("./takeUntil");
const without = require("./without");
const assertObjectsEqual = require("./assertObjectsEqual");


module.exports = {
  head,
  middle,
  tail,
  assertArraysEqual,
  assertEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without,
  assertObjectsEqual
};