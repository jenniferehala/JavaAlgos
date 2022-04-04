// Here, a balance index is ON an index, not BETWEEN indices.
// Return the balance index where sums are equal on either side (exclude its own value)
// Return -1 if none exist.
// Example 1: [-2, 5,7,0,3] ---> 2
// Balance index is 2 because on either side of that index the sums are equal: [-2,5, |7|, 0, 3] --> -2+5 == 0+3
// Example 2: [9,9] --> 1
// There is no balance index because there are fewer than 3 indices! As a result, we return -1 to maintain a consistent datatype

// function balanceIndex(arr) {
//     var left = 0
//     var right = 0

//     for (var i = 0; i < arr.length / 2; i++) {
//         left += arr[i]
//         if (right === left) {
//             return true
//         }
//         var right = 0
//         for (var j = arr.length - 1; j > 0; j--)
//             right += arr[arr.length - 1]
//         if (left == right) {
//             return true
//         }
//     }
//     return false

// }

function balanceIndex(arr) {
    var sumTotal = 0
    for (var i = 0; i < arr.length; i++) {
        sumTotal += arr[i];
    }
    var sumWorking = 0
    console.log(sumTotal)
    for (var j = 0; j < arr.length; j++) {
        sumTotal = sumTotal - arr[j];
        console.log("sumTotal = " + sumTotal)

        if (sumTotal == sumWorking) {
            return j;
        }
        sumWorking += arr[j];
        console.log("sumWorking = " + sumWorking)
    }
    return -1
}


console.log(balanceIndex([-2, 5, 7, 0, 3]))  // TRUE
// console.log(balanceIndex([9, 9])) // FALSE
// console.log(balanceIndex([4,2,2,6])) // TRUE
// console.log(balanceIndex([9,1,9])) // TRUE
// console.log(balanceIndex([1,8,1,2,3,4])) // TRUE


// Write a function that returns whether the given array has a balance point between indices, where one side's sum is equal to the other's
// Example [1,2,3,4,10] --> True
// Balance point happens b/w indices 3&4 where the left side equals the right: [1,2,3,4 | 10 | ==> 1+2+3+4 = 10]


// function balancePoint(arr) {
//     var sum = 0
//     var right = 0

//     //for loop
//     for (var i = 0; i < arr.length - 1; i++) {
//         sum += arr[i]
//         // console.log("sum is" + sum)
//         right = 0
//         for (var j = arr.length - 1; j >= 0; j--) {
//             right += arr[j]
//             // console.log("right is" + right)
//             if (right == sum) {
//                 return true
//             }
//         }
//     }
//     return false
// }


// console.log(balancePoint([1, 2, 3, 4, 10])) // TRUE
// console.log(balancePoint([1, 2, 3, 2, 1])) // FALSE
// console.log(balancePoint([1, 2, 3, 1, 2, 3, 2, 1])) // FALSE
// console.log(balancePoint([2, 2])) // TRUE









