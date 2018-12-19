"""Reverse a string using recursion.

For example::

    >>> rev_string("")
    ''

    >>> rev_string("a")
    'a'

    >>> rev_string("porcupine")
    'enipucrop'

"""


def rev_string(astring):
    """Return reverse of string using recursion.

    You may NOT use the reversed() function!
    """

    # base case; if string is empty or one item just return the string
    if len(astring) <= 1:
        return astring

    # return last character in string concatenated with rev_string() called
    # on original string with last character removed
    return astring[-1] + rev_string(astring[:-1])


if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print("\n*** ALL TESTS PASSED. !KROW DOOG\n")
