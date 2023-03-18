function allLeapYears(N) {
    let leapYears = [];
    for (let i = 1; i <= N; i++){
        if ((i % 4 === 0 && i % 100 !== 0) || (i % 100 === 0 && i % 400 === 0)) leapYears.push(i);
    }
    return leapYears;
}

console.log(allLeapYears(2000));