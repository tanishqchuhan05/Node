let arr =[ 2,1,4,3,5];
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length -1 -i; j++){
        if(arr[j]<arr[j+1]){
            let temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}

console.log("Second largest Number is:", arr[1]);