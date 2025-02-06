function areAnagrams(str1, str2) {
    let objstr1 = {};
    let objstr2 = {};

    // If the strings are not the same length, they can't be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Count characters in both strings
    for (let i = 0; i < str1.length; i++) {
        let char1 = str1[i];  
        let char2 = str2[i];  

        objstr1[char1] = (objstr1[char1] || 0) + 1;  // Increment count for str1
        objstr2[char2] = (objstr2[char2] || 0) + 1;  // Increment count for str2
    }

    for (let char in objstr1) {
        if (objstr1[char] !== objstr2[char]) {
            return false;  // If any character count doesn't match, return false
        }
    }

    // If all character counts match, return true
    return true;
}

console.log(areAnagrams("listen", "silent"));  
