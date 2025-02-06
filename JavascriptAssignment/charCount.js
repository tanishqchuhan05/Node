const string = "hello";
const count ={};
for(let i=0;i<string.length;i++){
    const ch =string[i];
    if(!count[ch]){
    count[ch]=0;
    }
    count[ch]++
}

console.log(count);