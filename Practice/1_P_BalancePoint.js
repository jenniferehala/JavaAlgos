// Write a function that returns whether the given array has a balance point between indices, where one side's sum is equal to the other's
// Example [1,2,3,4,10] --> True
// Balance point happens b/w indices 3&4 where the left side equals the right: [1,2,3,4 | 10 | ==> 1+2+3+4 = 10]

// ***** this is Nick's Class soln **** Doesn't Work

// function balancePoint(arr) {
//     var sum = arr[0];
//     var arrSum = 0;
//     for (var i = arr.length - 1; i > 0; i--) {
//         arrSum += arr[i]
//         for (var j = 1; j < arr.length; j++) {
//             if (arr[2] == null) {
//                 if (sum = arrSum) {
//                     return true
//                 }
//             }
//             sum += arr[j]
//             if (sum === arrSum) {
//                 return true
//             }
//         }

//     }
//     return false
// }
// console.log(balancePoint([4, 3, 7, 4, 10])); // TRUE
// console.log(balancePoint([4, 3, 7, 4, 11, 2])); // FALSE
// console.log(balancePoint([1, 2, 3, 1, 2, 3, 2, 1])); // FALSE
// console.log(balancePoint([2, 2])); // TRUE
// console.log(balancePoint([1, 2, 3, 4, 10])); // TRUE
// console.log(balancePoint([1, 2, 3, 2, 1])); // FALSE
// console.log(balancePoint([1, 2, 3, 1, 2, 3, 2, 1])); // FALSE
// console.log(balancePoint([2, 2])); // TRUE


// Diana's Soln - Works!

function balancePoint(arr) {
    var sum = 0
    var leftSum = 0

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    for (var i = 0; i < arr.length; i++) {
        var rightSum = sum - leftSum - arr[i]
        leftSum += arr[i]

        if (leftSum === rightSum) {
            return true;
        }

    }
    return false;
}

console.log(balancePoint([4, 3, 7, 4, 10])); // TRUE
console.log(balancePoint([4, 3, 7, 4, 11, 2])); // FALSE
console.log(balancePoint([1, 2, 3, 1, 2, 3, 2, 1])); // FALSE
console.log(balancePoint([2, 2])); // TRUE
console.log(balancePoint([1, 2, 3, 4, 10])); // TRUE
console.log(balancePoint([1, 2, 3, 2, 1])); // FALSE
console.log(balancePoint([1, 2, 3, 1, 2, 3, 2, 1])); // FALSE
console.log(balancePoint([2, 2])); // TRUE

// **** Kasey's Solution

function balancePoint(arr) {
    var arrTotal = 0;
    var subSum = 0;

    for (var i = 0; i < arr.length; i++) {
        arrTotal += arr[i];
    }

    for (var i = 0; i < arr.length; i++) {
        if (subSum === arrTotal - subSum) {
            return true;
        }
        subSum += arr[i];

    }
    return false
}

// console.log(balancePoint([4, 3, 7, 4, 10])); // TRUE
// console.log(balancePoint([4, 3, 7, 4, 11, 2])); // FALSE
// console.log(balancePoint([1, 2, 3, 1, 2, 3, 2, 1])); // FALSE
// console.log(balancePoint([2, 2])); // TRUE


