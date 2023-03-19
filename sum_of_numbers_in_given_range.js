function sumInGivenRange(r1, r2) {
    let sum = 0;
    for (let i = r1; i <= r2; i++){
        sum += i;
    }
    return sum;
}

console.log(sumInGivenRange(4,10))