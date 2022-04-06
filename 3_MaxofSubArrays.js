

// Given an array comprised of numbers that is potentially very long, return the maximum sum of values from a subarray. Any consecutive seuqence of indices in the array is considered a subarray. Create a function that returns the highest sum possible from these subarrays, and prints the subarray.

// [1,2,-4,3,-2,3,-1] return 4 and print [3,-2,3]

function maxOfSubarray(arr) {
    var sumTotal = 0
    var sumWorking = 0
    var highestArr = []
    for (var i = 0; i < arr.length; i++) {
        sumTotal += arr[i]
        if (sumTotal < sumWorking) {
            highestArr.push(sumWorking)
            sumTotal = 0
        }
        sumWorking = sumTotal

    }
    return highestArr
}

console.log(maxOfSubarray([1, 2, -4, 3, -2, 3, -1])); //return 4; prints [3,-2,3]
// console.log(maxOfSubarray([1, 2, -4, 300, -200, 3, -1]));
// console.log(maxOfSubarray([1, -210, -4, 300, -200, 3, -1]));
// console.log(maxOfSubarray([-100, -210, -4, -300, -200, -3, -1]));