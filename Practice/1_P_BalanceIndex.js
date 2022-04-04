// Here, a balance index is ON an index, not BETWEEN indices.
// Return the balance index where sums are equal on either side (exclude its own value)
// Return -1 if none exist.
// Example 1: [-2, 5,7,0,3] ---> 2
// Balance index is 2 because on either side of that index the sums are equal: [-2,5, |7|, 0, 3] --> -2+5 == 0+3
// Example 2: [9,9] --> 1
// There is no balance index because there are fewer than 3 indices! As a result, we return -1 to maintain a consistent datatype

function balanceIndex(arr) {
    var sumTotal = 0
    for (var i = 0; i < arr.length; i++) {
        sumTotal += arr[i];
    }

    var sumWorking = 0

    for (var j = 0; j < arr.length; j++) {
        sumTotal = sumTotal - arr[j]
        // console.log(sumTotal)
        if (sumWorking === sumTotal) {
            return j
        }
        sumWorking += arr[j]
    }
    return -1

}


console.log(balanceIndex([-2, 5, 7, 0, 3]))  // 2
console.log(balanceIndex([9, 9])) // -1
console.log(balanceIndex([4, 2, 2, 6])) // 2
console.log(balanceIndex([9, 1, 9])) // 1
console.log(balanceIndex([1, 8, 1, 2, 3, 4])) // 2