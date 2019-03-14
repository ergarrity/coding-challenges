// Given a string, write a funciton to chck if it is a permutation of a palindrome

function isPalindrome(str){
    let charCount = {};

    for (let i = 0; i < str.length; i++){
        if (charCount[str[i]]){
            charCount[str[i]]++;
        } else {
            charCount[str[i]] = 1;
        }
    }

    let hasOddCount = false;

    for (let key in charCount){
        if (charCount[key] % 2 !== 0){
            if (hasOddCount){
                return false;
            } else {
                hasOddCount = true;
            }
        }
    }
    return true;
}