// Remove the duplicates from a given array. Do not alter the original array, return a new one! Keep the results 'stable' (retain the original order);

// Example: [2,1,2,1,3,4,4,5] ==> [2,1,3,4,5]

// Slightly more difficult! Work 'in-place' in the given array. For this one you can mess with the order if you need too!

function removeDuplicates(arr) {

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1)
            }
        }
    }
    return arr
}
console.log(removeDuplicates([1, 2, 1, 3, 4, 4, 5])); // [1,2,3,4,5]
// console.log(removeDuplicates([1, 2, 1, 3, 4, 4, 5, 4, 4, 4, 4, 6, 6, 6, 6, 78, 7])) // [1, 2, 3, 4, 6, 7, 8, 5, 53]