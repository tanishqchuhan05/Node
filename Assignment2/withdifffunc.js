let arr =[12,5,8,7,15,4,20,1];
let evenSum = 0;
let oddCount = 0;
let productEvenIndices =1;

function evenSums(arr){
for (let i=0;i<arr.length;i++){
   if(arr[i]%2==0)
    evenSum += arr[i];
}
return(evenSum)
}


function oddCounts(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0)
            oddCount++;
    }

    return(oddCount)
}

function productEvenIndicess(arr){
    for(let i=0;i<arr.length;i++){
        if(i%2==0){
            productEvenIndices = productEvenIndices*arr[i];
        }
    }

    return(productEvenIndices)
}


console.log(evenSums(arr));
console.log(oddCounts(arr));
console.log(productEvenIndicess(arr));
