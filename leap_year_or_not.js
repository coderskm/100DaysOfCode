function leapYear(N) {
    if ((N % 4 === 0 && N % 100 !== 0) || ((N % 400 === 0 && N % 100 === 0))) {
        return `${N} is leap year`;
    }
    return `${N} is not leap year`;
}

console.log(leapYear(2022));
