function factorial(N) {
    let fact = 1;
    for (let i = N; i >= 1; i--){
        fact *= i;
    }
    return fact;
}

console.log(factorial(5));