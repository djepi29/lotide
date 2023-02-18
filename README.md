# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @float32/lotide`

**Require it:**

`const _ = require('@float32/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
  * `head`: function returns first element of an array.

  * `middle`: funciton returns middle elemetns of an array.

  * `tail`: funciton returns all elements except the first one of an array.

  * `assertArraysEqual`: function asserts two arrays (boolean).

  * `assertEqual`: function asserts two elements.

  * `countLetters`: function logs occurence of leters of a string.

  * `countOnly`:    function keep watch of specified elements and logs occurence in an object.

  * `eqArrays`: function compares/=== two arrays (boolean).

  * `eqObjects`: funciton compares/=== two objects (boolean).

  * `findKey`: funciton finds key of object by callback.

  * `findKeyByValue`: funciton finds key of objects by given value.

  * `flatten`: funciton unnest (2 levels)nesteed arrays.

  * `letterPositions`: funciton prints index of letters of a string.

  * `map`: funciton modifies element of an array by callback.

  * `takeUntil`: funciton logs element of an array untill given triger to stop.

  * `without`: funciton filters an array with another array.

  * `assertObjectsEqual`: function asserts two objects.
