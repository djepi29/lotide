// impoerted functions
const tail = require("../tail")
const assertEqual = require("../assertEqual")

// test cases

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
assertEqual(result[0], 'Lighthouse')
assertEqual(result[1], 'Labs')

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
