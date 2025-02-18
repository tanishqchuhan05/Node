function Array(arr){
    let evenSum = 0;
    let oddCount =0;
    let productEvenIndices = 1;

    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 === 0){
            evenSum += arr[i];
        }
        else{
            oddCount ++;
        }

        if(i % 2 === 0){
            productEvenIndices = productEvenIndices*arr[i];
        }
    }
    console.log(`evenSum: ${evenSum} oddCount: ${oddCount} productEvenIndices: ${productEvenIndices}`)

    }

let arr =[12,5,8,7,15,4,20,1];

Array(arr);