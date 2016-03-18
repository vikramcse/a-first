'use strict';

module.exports = function(arr, n) {
  if (!Array.isArray(arr))
    throw new TypeError('First argument must be array');

  if (arr == null) return 0;

  if (n > arr.length)
  	throw new Error('Argument n can not be greater than array size');

  if (n == null) return arr[0];

  return arr.slice(0, n);
}