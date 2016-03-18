var expect = require('chai').expect;
var first = require('./index.js');

describe('tests for getting first n elements from array', function() {
	it('should return first element 1 in absence of argument n', function () {
		expect(first([1, 2, 3, 4, 5])).to.be.equal(1);
	});

	it('should return first 3 elements as n is 3', function () {
		expect(first([1, 2, 3, 4, 5], 3)).to.be.eql([1, 2, 3]);
	});

	it('should return first all elements as n is 5', function () {
		expect(first([1, 2, 3, 4, 5], 5)).to.be.eql([1, 2, 3, 4, 5]);
	});
});