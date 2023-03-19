function numOfDigits(num) {
    let totalDigits = 0;
    while (num !== 0) {
        let digit = num % 10;
        num = parseInt(num / 10);
        totalDigits++;
    }
    return totalDigits;
}

console.log(numOfDigits(982000064647342849354));