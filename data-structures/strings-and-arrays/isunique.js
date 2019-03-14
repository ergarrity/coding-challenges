// Implement an algorithm to determine if a string has all unique characters.

function isUnique(str) {
    let seen = new Set([]);

    for (let i = 0; i < str.length; i++){
        if (seen.has(str[i])){
            return false;
        }
        seen.add(str[i]);
    }
    return false;
}

// What if you can't use data structures other than strings and arrays?

function isUniqueAlt(str){
    let chars = [];
    
    for (let i = 0; i < str.length; i++){
        chars.push(str[i]);
    }

    chars.sort();

    for (let i = 0; i < str.length - 1; i++){
        if (chars[i] === chars[i+1]) {
            return false;
        }
    }
    return true;
}