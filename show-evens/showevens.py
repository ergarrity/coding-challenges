"""Given list of ints, return list of *indices* of even numbers in list.

For example::

    >>> show_evens([])
    []

    >>> show_evens([2])
    [0]

    >>> show_evens([1, 2, 3, 4])
    [1, 3]

"""


def show_evens(nums):
    """Given list of ints, return list of *indices* of even numbers in list."""

    results = []
    count = 0

    for num in nums:
        
        #test to see if num is even, and push current count to results list if so
        if num % 2 == 0:
            results.append(count)
        
        #increment count by 1 for every iteration to track the index
        count += 1

    return results


if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print("\n*** ALL TESTS PASSED. EVENLY HANDLED!\n")
