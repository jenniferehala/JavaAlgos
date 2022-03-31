function removeDupe(arr) {
    
    for (var i = 0; i < arr.length; i++){
        for (var j = i+1; j < arr.length; j++){
            console.log("arr[i]" + arr[i])
            console.log("arr[j]" + arr[j])
            if (arr[j] === arr[i]){
                arr.splice(j, 1)
        }
    }
    }
    return arr
}

console.log(removeDupe([8, 9, 9, 10, 2, 2, 34]))