function positiveOrNegative(num) {
    if (num > 0) return `${num} is positive`;
    else if (num === 0) return "0 is neither positive nor negative";
    else return `${num} is negative`;
}

console.log(positiveOrNegative(0));