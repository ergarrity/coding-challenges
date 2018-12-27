// Sum a list of integers using recursion.

// Given a list of numbers, return the sum. Do not use the built in 'sum' method.

// For example::

//     >>> sum_list([5, 5])
//     10

//     >>> sum_list([-5, 10, 4])
//     9

//     >>> sum_list([20])
//     20

// The sum of an empty list is zero::

//     >>> sum_list([])
//     0

function sumList(lst) {
    if (lst.length === 0) {
        return 0;
    }
    return lst.pop() + sumList(lst);
}