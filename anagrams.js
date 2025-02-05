function areAnagrams(str1, str2){
    str1 = "listen";
    str2 = "silent";
    if(str1.length!==str2.length){   //if the strings are not same
        return false;
    }
return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(areAnagrams());