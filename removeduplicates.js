function removeDuplicates(arr) {
    let newArray = [];  
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        
        for (let j = 0; j < newArray.length; j++) {
            if (arr[i] === newArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            newArray.push(arr[i]);
        }
    }
    
    return newArray;
}

let arr = [1, 2, 3, 2, 4, 5, 3, 3, 5, 6, 2];
let result = removeDuplicates(arr);
console.log(result); 
