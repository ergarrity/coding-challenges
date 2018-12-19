"""Given a string, return True if it is a pangram, False otherwise.

For example::

    >>> is_pangram("The quick brown fox jumps over the lazy dog!")
    True
    
    >>> is_pangram("I love cats, but not mice")
    False
"""


def is_pangram(sentence):
    """Given a string, return True if it is a pangram, False otherwise."""

    # Create empty set
    letters_set = set()

    # Iterate over characters in sentence. If char is a letter, convert to
    # lowercase and add to letters_set
    for char in sentence:
        if char.isalpha():
            letters_set.add(char.lower())
            
    return len(letters_set) == 26


if __name__ == "__main__":
    import doctest
    if doctest.testmod().failed == 0:
        print("\n*** ALL TESTS PASSED. YAY!\n")
