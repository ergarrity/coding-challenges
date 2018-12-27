// Given a string, return True if it is a pangram, False otherwise.

// For example::

//     >>> is_pangram("The quick brown fox jumps over the lazy dog!")
//     True
    
//     >>> is_pangram("I love cats, but not mice")
//     False

function isPangram(str){
    
    let lettersUsed = {}
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    for( i = 0; i < str.length; i++) {
        
        let char = str[i].toLowerCase()

        if (!alphabet.includes(char)){
            continue;
        }
        if (lettersUsed[char]){
            lettersUsed[char] += 1;
        } else {
            lettersUsed[char] = 1;
        }
    }
    return Object.keys(lettersUsed).length === 26;
}