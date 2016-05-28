function getNumber(num) {
    var result = '';

    if (num % 2 === 0) {
        result += 'Fizz';
    }

    if (num % 3 === 0) {
        result += 'Buzz';
    }

    return result || num;
}

function getNumbers(max) {
    var result = [];

    if (typeof max !== 'number') {
        return result;
    }

    for (var i = 1; i <= max; i++) {
        result.push(getNumber(i));
    }

    return result;
}

exports.getNumber = getNumber;
exports.getNumbers = getNumbers;

