function sortedSquares(nums) {
    for (let i = 0; i < nums.length; i++){
        nums[i] = nums[i] ** 2;
    }
    return nums.sort((a, b) => a - b);
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));