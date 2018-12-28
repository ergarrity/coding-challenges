// Turn a phrase into Pig Latin.

// This takes a space-separated phrase and returns it in Pig Latin.

// Rules:

// 1. If the word begins with a consonant (not a, e, i, o, u),
//    move the first letter to the end and add 'ay'

// 2. If the word begins with a vowel, add 'yay' to the end

// For example:

//     >>> pig_latin('hello awesome programmer')
//     'ellohay awesomeyay rogrammerpay'

function pigLatin(phrase) {

    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    let wordsList = phrase.split(' ');

    let result = [];

    for (i = 0; i < wordsList.length; i++){
        
        word = wordsList[i];
        
        if (vowels.has(word[0])){
            result.push((word += 'yay'));
        } 
        else {
            result.push(word.slice(1) + word[0] + 'ay');
        }
    }
    return result.join(' ');
}