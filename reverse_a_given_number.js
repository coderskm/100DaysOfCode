function revNum(num) {
    let rev = 0;
    while (num !== 0) {
        let digit = num % 10;
        rev = (rev * 10) + digit;
        num = parseInt(num / 10);
    }
    return rev;
}

console.log(revNum(876));