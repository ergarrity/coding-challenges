// Count items in a list recursively.

// For example:

//         >>> count_recursively([])
//         0

//         >>> count_recursively([1, 2, 3])
//         3

function countRecursively(lst){
    if (lst.length === 1){
        return 1;
    } else if (lst.length === 0 ){
        return 0;
    } else {
        lst.pop()
        return 1 + countRecursively(lst)
    }
}