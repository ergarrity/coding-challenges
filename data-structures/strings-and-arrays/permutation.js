// Given two strings, write a method to determine if one is a permutation of the other.

function isPermutation(strA, strB){
    if (strA.length !== strB.length){
        return false;
    }

    let charCount = {};

    for (let i = 0; i < strA.length; i++){
        if (charCount[strA[i]]){
            charCount[strA[i]]++;
        } else {
            charCount[strA[i]] = 1;
        }
    }

    for (let i = 0; i < strB.length; i++){
        if (charCount[strB[i]]){
            charCount[strB[i]]--;
        } else {
            return false;
        }
    }

    for (let key in charCount){
        if (charCount[key] !== 0){
            return false;
        }
    }

    return true;
}