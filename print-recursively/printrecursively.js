// Print items in the list, using recursion.

// For example::

//    >>> print_recursively([1, 2, 3])
//    1
//    2
//    3

function printRecursively(lst) {
    if (lst.length === 1) {
        console.log(lst[0]);
    } else if (lst.length === 0) {
        return;
    } else {
        console.log(lst.slice(0, 1)[0]);
        printRecursively(lst.slice(1));
    }
}