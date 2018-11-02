const assert = require('chai').assert;
const sumOfOther = require('../src/sumOfOther');
const make = require('../src/make');

describe('SumOfOther', function () {
  it('should return sum of all element of the array', function () {
    const result = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(result, [8, 7, 6, 9]);
  });

  it('should return sum of all element of the array', function () {
    const result = sumOfOther([3, 6, 7, 2]);
    assert.deepEqual(result, [15, 12, 11, 16]);
  });

  it('should return sum of all element of the array', function () {
    const result = sumOfOther([34, 57, 78, 99, 23, 12]);
    assert.deepEqual(result, [269, 246, 225, 204, 280, 291]);
  });
});

describe('Make', function () {
  it('should return sum', function () {
    function sum(a, b) {
      return a + b;
    }
    const result = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(result, 777);
  });
});