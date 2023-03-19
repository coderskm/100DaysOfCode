function palindromeNumber(num) {
    let temp = num;
    let rev = 0;
    while (num !== 0) {
        let digit = num % 10;
        rev = (rev * 10) + digit;
        num = parseInt(num / 10);
    }
    if (temp === rev) return "number is palindrome";
    return "number is not palindrome";
}

console.log(palindromeNumber(12121));