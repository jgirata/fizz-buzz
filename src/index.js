exports.getNumber = function (num) {
    var result = '';

    if (num % 2 === 0) {
        result += 'Fizz';
    }

    if (num % 3 === 0) {
        result += 'Buzz';
    }

    return result || num;
}

