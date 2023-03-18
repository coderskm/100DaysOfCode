function frequency(num) {
    let obj = {};
    while (num !== 0) {
        let digit = num % 10;
        if (!obj[digit]) obj[digit] = 1;
        else obj[digit] += 1;
        num = parseInt(num / 10);
    }
    return obj;
}

console.log(frequency(12231));
