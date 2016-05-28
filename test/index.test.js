var fizzBuzz = require('../src/index');

describe('fizz-buzz', function () {
    it('should return "Fizz" for even numbers', function () {
        expect(fizzBuzz.getNumber(2)).toBe('Fizz');
    });

    it('should return the original number for odd numbers not divisible by 3', function () {
        expect(fizzBuzz.getNumber(5)).toBe(5);
    });
});

