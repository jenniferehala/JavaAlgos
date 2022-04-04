//Balance Point and Balance Index!!!

// Write a function that returns whether the given array has a balance point between indices, where one side's sum is equal to the other's
//Example [1,2,3,4,10] --> True
// the balance point happens b/w indices 3&4 where the left side equals the right: [1,2,3,4 | 10 | ==> 1+2+3+4 = 10]


function balancePoint(arr) {
    var sum = 0
    var right = 0
    for (var i = 0; i < arr.length - 1; i++) {
        sum += arr[i]
        console.log("sum is " + sum)
        right = 0

        for (var j = arr.length - 1; j >= 0; j--) {
            right += arr[j]
            console.log("right is " + right)
        }
        if (sum == right) {
            return true
        }
    }
    return false
}

console.log(balancePoint([1, 2, 3, 4, 10])) // TRUE
// ---> 1+2+3+4 = 10     10 == 10 so balanced
// console.log(balancePoint([1,2,3,2,1])) // FALSE
// console.log(balancePoint([1,2,3,1,2,3,2,1])) // FALSE
// console.log(balancePoint([2,2])) // TRUE


// Here, a balance index is ON an index, not BETWEEN indices.
// Return the balance index where sums are equal on either side (exclude its own value)
//Return -1 if none exist.
//Example 1: [-2, 5,7,0,3] ---> 2
// The balance index is 2 because on either side of that index the sums are equal: [-2,5, |7|, 0, 3] --> -2+5 == 0+3
// Example 2: [9,9] --> 1
// There is no balance index because there are fewer than 3 indices! As a result, we return -1 to maintain a consistent datatype

function balanceIndex(arr) {
    var sum = 0
    for (var i = 0; i < arr.length / 2; i++) {
        if (arr[i] == arr[arr.length - 1]) {
            return true
        }


    }
}

// console.log(balanceIndex([-2,5,7,0,3]))  // TRUE
// console.log(balanceIndex([9,9])) // FALSE
// console.log(balanceIndex([4,2,2,6])) // TRUE
// console.log(balanceIndex([9,1,9])) // TRUE
// console.log(balanceIndex([1,8,1,2,3,4≠])) // TRUE


function balancePoint(arr) {
    var sum = arr[0];
    var arrSum = 0;
    for (var i = arr.length - 1; i > 0; i--) {
        arrSum += arr[i]
        for (var j = 1; j < arr.length; j++) {
            if (arr[2] == null) {
                if (sum = arrSum) {
                    return true
                }
            }
            sum += arr[j]
            if (arrSum == sum) {
                return true
            }
        }
    }
    return false
}

// console.log(balancePoint([2, 2, 4]))
console.log(balancePoint([1, 2, 3, 4, 10])) // TRUE
// ---> 1+2+3+4 = 10     10 == 10 so balanced
console.log(balancePoint([1, 2, 3, 2, 1])) // FALSE
console.log(balancePoint([1, 2, 3, 1, 2, 3, 2, 1])) // FALSE
console.log(balancePoint([2, 2])) // TRUE



function balancePoint(arr) {
    var sum = 0;
    var leftSum = 0;

    for (var i = 0; i < arr.length; i++)
        sum = sum + arr[i]

    for (var i = 0; i < arr.length; i++) {
        var rightSum = sum - leftSum - arr[i]
        leftSum = leftSum + arr[i]

        if (leftSum == rightSum)
            return true;
    }
    return false;
}

console.log(balancePoint([1, 2, 3, 4, 10])) // TRUE
// ---> 1+2+3+4 = 10     10 == 10 so balanced
console.log(balancePoint([1, 2, 3, 2, 1])) // FALSE
console.log(balancePoint([1, 2, 3, 1, 2, 3, 2, 1])) // FALSE
console.log(balancePoint([2, 2])) // TRUE

console.log(balancePoint([2, 4, 2])) // false
console.log(balancePoint([2, 3, 2, 1, 2])) // TRUE

function balancePoint(arr) {
    var temp1 = 0
    for (var i = 0; i < arr.length; i++) {
        var temp2 = 0
        temp1 += arr[i]
        console.log(temp1)
        for (var j = arr.length - 1; j > i; j--) {

            temp2 += arr[j];
            console.log(temp2);
        }
        if (temp1 == temp2) {
            return true
        }
    }
    return false
}
console.log(balancePoint([1, 2, 3, 4, 10]))

function balancePointRecursive(arr, div = 1, rightSum = 0, leftSum = 0) {
    //if the length of the array is 1 or 0 we return false
    if (arr.length === 1) return false;
    if (arr.length === 0) return false
    // gather left side of the div sum
    for (let i = 0; i < div; i++) {
        leftSum += arr[i];
    }
    // gather right side of the div sum
    for (let j = arr.length - 1; j >= div; j--) {
        rightSum += arr[j];
    }
    if (rightSum === leftSum) return true;
    else if (div === arr.length - 1 && rightSum !== leftSum) return false;
    //increment div point, revert both sums to 0, and call the function on itself to start over until we meet our return statements
    div++;
    rightSum = 0;
    leftSum = 0;
    return balancePointRecursive(arr, div, rightSum, leftSum);
}

function balanceIndex2(arr) {

    for (let i = 0; i < arr.length; i++) {

        let sumLeft = 0, sumRight = 0;
        // find the sum of the values to the left of i

        for (let j = 0; j < i; j++) {
            sumLeft += arr[j];
        }   // first time: this will always come back as 0

        // find the sum of the values to the right of i
        for (let j = arr.length - 1; j > i; j--) {
            sumRight += arr[j];
        }   // first time, this will always come back as the sum of the whole array

        if (sumLeft === sumRight) return i;
    }

    // if we get all the way through the "i" loop and haven't returned true yet:
    return -1;
}