/*Is the word an anagram of a palindrome?

A palindrome is a word that reads the same forward and backwards
(eg, "racecar", "tacocat"). An anagram is a rescrambling of a word
(eg for "racecar", you could rescramble this as "arceace").

Determine if the given word is a re-scrambling of a palindrome.
The word will only contain lowercase letters, a-z.

Examples::

    >>> is_anagram_of_palindrome("a")
    True

    >>> is_anagram_of_palindrome("ab")
    False

    >>> is_anagram_of_palindrome("aab")
    True

    >>> is_anagram_of_palindrome("arceace")
    True

    >>> is_anagram_of_palindrome("arceaceb")
    False
    */

function isAnagramOfPalindrome(string) {
    
    letter_counts = {}

    for ( i = 0; i < string.length; i++){
        letter = string[i]
        if (typeof letter_counts[letter] === 'number'){
            letter_counts[letter] += 1;
        }
        else {
            letter_counts[letter] = 1;
        }
    }

    let letter_with_odd_count = false;

    for (let key in letter_counts){
        if (letter_counts[key] % 2 != 0){
            if (letter_with_odd_count === false){
                letter_with_odd_count = true;
            } else {
                return false;
            }
        }

    }
    return true;

}