function mode(arr){
    var obj = []
    for(let i = 0; i < arr.length; i++){
        if( !obj[arr[i]] ){
            obj[arr[i]] = 1
        }
        else{
            obj[arr[i]] += 1
        }
    }

    var mode = 0
    var modeCount = 0;
    for(var key in obj) {
        if(obj[key] > modeCount) {
            mode = key;
            modeCount = obj[key]
        }
    }
    return mode
}

console.log(mode([1,2,3,1,1,2,2,5,6]));


function mode(arr) {
    let arrayDict = {[arr[0]] : 1};
    let currentMaxCount = 1;
    let currentMode = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(!arrayDict[arr[i]]) {
            arrayDict[arr[i]] = 1;
        } else {
            arrayDict[arr[i]]++;
        }
        if (arrayDict[arr[i]] > currentMaxCount) {
            currentMaxCount++;
            currentMode = arr[i]
        }
    }
    return currentMode;
}

console.log(mode([1,2,3,1,1,2,2,5,6]));

function flatten(arr, newArray=[]) {

    for(let i = 0; i < arr.length; i++) {
        if(!Array.isArray(arr[i]) {
            newArray.push(arr[i])
        }
        else {
            newArray = flatten(arr[i], newArray);
        }
        return newArray;
    }
}