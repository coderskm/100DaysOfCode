function isPalindrome(n,arr) {
    for (let i = 0; i < n / 2; i++){
        if (arr[i] !== arr[n - i - 1]) return false;
    }
    return true;
}

console.log(isPalindrome(5, [1, 2, 3, 3, 1]));