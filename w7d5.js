


function matrixSearch(arr, subArr) {
    var Y1 = arr.length;
    var X1 = arr[0].length;
    var Y2 = subArr.length;
    var X2 = subArr[0].length;

    for (var startY = 0; startY <= Y1-Y2; startY++) {
        for (var startX = 0; startX <= X1-X2; startX++) {
            var found = true;
            for (var j = 0; j < Y2; j++) {
                for (var i = 0; i < X2; i++) {
                    if (arr[startY+j][startX+i] != subArr[j][i]) {
                        found = false;
                        break;
                    }
                }
                if (!found)
                    break;
            }
            if (found)
                return true;
        }
    }
    return false;
}


console.log(matrixSearch([ [12, 34, 45, 56],[98, 87, 76, 65],[56, 67, 78, 89],[54, 43, 32, 21] ], [ [67, 78], [43, 32] ])); // true
console.log(matrixSearch([ [12, 34, 45, 56],[98, 87, 76, 65],[56, 67, 78, 89],[54, 43, 32, 21] ], [ [67, 78], [43, 21] ])); // false


[12, 34, 45, 56]
[98, 87, 76, 65],
[56, 67, 78, 89],


// **instructor solution*******
function matrixSearch (larger, smaller) {
    // Loops through the large matrix
    for(var i = 0; i < larger.length; i++) {
        for (var j = 0; j < larger[0].length; j++) {
            // At every index of the larger check to see if the top left corner of the smaller matches
            console.log("Is smaller [0][0] equal to larger [i][j]? - " + smaller[0][0]+ "," + larger[i][j]);

            if (smaller[0][0] === larger[i][j]) {
                console.log("We found a match!")
                // If match then we continue searching for a deeper match
                var isMatched = true;

                for (var k = 0; k < smaller.length; k++) {
                    for (var l = 0; l < smaller[0].length; l++) {
                        // Checks to see if there are no matches for the bottom row in the smaller.
                        console.log("Is smaller [k][l] not equal to larger [i+k][j+l]? - " + smaller[k][l]+ "," + larger[i+k][j+l]);

                        if(smaller[k][l] != larger[i+k][j+l]) {
                            isMatched = false;
                            break;
                        }
                    }
                    
                    if (!isMatched) {
                        break;
                    }
                }
                if (isMatched) {
                    return true;
                }
            }
            
        }
    }
    return false;
}


// ******* Our soln ******

var big = [
    [67,34,45,56],
    [98,87,76,65],
    [56,67,78,89],
    [54,43,32,21]
];

var small = [
    [67,78],
    [43,32]
];

var anotherSmall = [
    [67,7],
    [43,32]
];

for(var i = 0; i < small.length; i++){
    for (var j = 0; j < small[i].length; j++){
        for (var k = 0; k < big.length; k++){
            for(var l = 0; l < big[k].length; l++){
                if(small[i][j] == big[k][l]){
                    return true
                }
            }
        }
    }
}

console.log(matrixSearch(big, small))
console.log(matrixSearch(big, anotherSmall))