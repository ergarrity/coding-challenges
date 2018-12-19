"""Given a list of numbers 1...max_num, find which one is missing in a list."""


def missing_number(nums, max_num):
    """Given a list of numbers 1...max_num, find which one is missing.

    *nums*: list of numbers 1..[max_num]; exactly one digit will be missing.
    *max_num*: Largest potential number in list

    >>> missing_number([7, 3, 2, 4, 5, 6, 1, 9, 10], 10)
    8
    
    """

    nums_dict = {}

    # Creates keys for all possible numbers in list and sets all values to False
    for i in range(max_num):
        nums_dict[i+1] = False

    # Iterates over nums and changes value to True for each num key
    for num in nums:
        nums_dict[num] = True

    # Iterates over nums_dict and returns key with false value (this will be
    # missing number)
    for key in nums_dict:
        if nums_dict[key] == False:
            return key

        



if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print("\n*** ALL TESTS PASS. NICELY DONE!\n")
