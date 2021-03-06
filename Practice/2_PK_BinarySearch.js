// =============================================
// Binary Search - Kasey
// =============================================

// Write a function that, given a sorted array and a value, determines whether the value is found within the array through 
// recursively searching, and returns the index. Binary Search works by checking whether the value given is greater than or 
// less than a midway point, which is why the given array must be sorted. 
// Also, even though there's only an array and value given, you can add additional parameters to your function.
// Return -1 if the number is not in the array

// val = 9
// arr = [1,2,3,5,7,9,10,11,13,14,15,56,78]

// [1,2,3,5,7,9,10      |        11,13,14,15,56,78] <----- 9 is less than halfway so now you can search the left side only
// [1,2,3,5,       |        7,9,10] <------  9 is greater than halfway so you can search the right side only
// [7,      |       9,10] <------ depending on where you split,9 is greater than halfway
// [9,     |      10] <------ whittle down to 1 or 2 items to check and solve!


function binarySearch(num, arr, l = 0, r = arr.length) {
    if (arr.length < 1) {
        return -1;
    }
    if (r - l > 1) {
        var mid = Math.floor((r + l) / 2);

        if (arr[mid] == num) {
            return mid
        }
        if (num < arr[mid]) {
            return binarySearch(num, arr, l, mid);
        }
        return binarySearch(num, arr, mid + 1, r);
        // mid + 1 bc we don't need to recheck that mis, the fact that we are leaning in a direction when we split our arrays
    }
    return arr[l] == num ? l : -1;
}


console.log(binarySearch(9, [1, 2, 3, 5, 7, 9, 10, 11, 13, 14, 15, 56, 78]))
console.log(binarySearch(-2, [1, 2])) // -1
console.log(binarySearch(4, [1, 2])) // -1
console.log(binarySearch(1, [1, 2])) // 0
console.log(binarySearch(2, [1, 2, 2])) // 1
console.log(binarySearch(7, [])) // -1
console.log(binarySearch(2, [1, 2, 2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 6, 6, 6])) // 2-6 acceptable
console.log(binarySearch(1, [1, 1, 1, 1, 1])) // 0-4 acceptable
console.log(binarySearch(8, [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8, 9, 10])) // 9-10 acceptable

// make sure to test all given scenarios!
//extra challengel don't use built-in function such as splice() or slice(),
//with the exception of rounding functions (Math.floor(), Math.ceil())


// My groups Solution

// function binarySearch(arr, n) {

//     let mid = Math.floor(arr.length / 2);

//     if (arr.length === 1 && arr[0] != n) {
//         return false;
//     }
//     if (n === arr[mid]) {
//         return true;

//     } else if (n < arr[mid]) {
//         return binarySearch(n, arr.slice(mid));

//     } else if (n > arr[mid]) {
//         return binarySearch(n, arr.slice(mid));
//     }
// }
// console.log(binarySearch([1, 2, 3, 5, 7, 9, 10, 11, 13, 14, 15, 56, 78], 9))
