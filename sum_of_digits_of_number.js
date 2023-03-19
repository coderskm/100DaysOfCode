function sumOfDigits(num) {
    let sum = 0;
    while (num !== 0) {
        let digit = num % 10;
        sum += digit;
        num = parseInt(num / 10);
    }
    return sum;
}

console.log(sumOfDigits(9834));