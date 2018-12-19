"""Print items in the list, using recursion.

For example::

   >>> print_recursively([1, 2, 3])
   1
   2
   3

"""


def print_recursively(lst):
    """Print items in the list, using recursion."""
   
    # prints first item in list
    print(lst[0])
    
    # returns when list has only one item (base case)
    if len(lst) == 1:
        return
    
    # makes recursive call on list with first item removed
    print_recursively(lst[1:])



if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print("\n*** ALL TEST PASSED. GREAT JOB!\n")
