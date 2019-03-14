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