var fizzBuzz = require('../src/index');

describe('fizz-buzz', function () {
    describe('getNumber', function () {
        it('should return "Fizz" for even numbers', function () {
            expect(fizzBuzz.getNumber(2)).toBe('Fizz');
        });

        it('should return the original number for odd numbers not divisible by 3', function () {
            expect(fizzBuzz.getNumber(5)).toBe(5);
        });
    });

    describe('getNumbers', function () {
        it('should return an empty array for numbers less than or equal to 0', function () {
            expect(fizzBuzz.getNumbers(0)).toEqual([]);
            expect(fizzBuzz.getNumbers(-17)).toEqual([]);
        });

        it('should return Fizz for an even number', function () {
            expect(fizzBuzz.getNumbers(2)).toEqual([ 1, 'Fizz' ]);
        });
    });
});

